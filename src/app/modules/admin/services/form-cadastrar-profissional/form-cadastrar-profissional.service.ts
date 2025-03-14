import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormCadastrarParceiroService } from '../form-cadastrar-parceiro/form-cadastrar-parceiro.service';
import { CategoriaParceiroEnum } from '../../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { cpfValidator } from 'src/app/modules/shared/validators/cpf-validator/cpf-validator';
import { ParceiroEspecialidade } from '../../../shared/models/parceiro/parceiro-especialidade.model';
import { dateValidator } from 'src/app/modules/shared/validators/date-validator/date-validator';
import { futureDateValidator } from 'src/app/modules/shared/validators/future-date-validator/future-date-validator';
import { pastDateValidator } from 'src/app/modules/shared/validators/past-date-validator/past-date-validator';
import { DateTime, Duration } from 'luxon';
import { ParceiroProfissional } from '../../models/parceiro-profissional.model';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { FormaAtendimento } from '../../../shared/models/parceiro/forma-atendimento.model';
import { LocalAtendimento } from '../../../shared/models/parceiro/local-atendimento.model';
import { distinctUntilChanged } from 'rxjs';
import CustomFormParceiroValidator from 'src/app/modules/shared/validators/custom-form-parceiro-validatior/custom-form-parceiro-validator';
import { removeImgPath } from 'src/app/modules/shared/functions/util/image-path';
import { environment } from 'src/environments/environment';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarProfissionalService extends FormCadastrarParceiroService {

  constructor() {
    super();
    this.formGroup = this.formProfissional;
    this.checkChanges([this.formProfissional]);

    this.formProfissional.valueChanges.pipe(distinctUntilChanged()).subscribe((value) => {
      this.formProfissional.get('servicos')?.updateValueAndValidity({ onlySelf: true });
      this.formProfissional.get('formasAtendimento')?.updateValueAndValidity({ onlySelf: true });

      if (
        value.servicos?.some((servico) => servico.descricao === 'Teleconsulta') &&
        !value.formasAtendimento?.some((formaAtendimento) => formaAtendimento.teleconsulta)
      ) {
        this.formProfissional.get('servicos')?.setErrors({
          ...this.formProfissional.get('servicos')?.errors,
          teleconsultaSemFormaAtendimento: true,
        });
      }

      if (
        !value.servicos?.some((servico) => servico.descricao === 'Teleconsulta') &&
        value.formasAtendimento?.some((formaAtendimento) => formaAtendimento.teleconsulta)
      ) {
        this.formProfissional.get('formasAtendimento')?.setErrors({
          ...this.formProfissional.get('formasAtendimento')?.errors,
          formasAtendimentoSemTeleconsulta: true,
        });
      }
    });
  }

  public formProfissional = this.fb.group({
    ...this.getFormBaseCadastrarParceiro(CategoriaParceiroEnum.PROFISSIONAL_SAUDE),
    cpf: this.fb.nonNullable.control<string>('', {
      validators: [Validators.required, cpfValidator],
    }),
    dataNascimento: this.fb.nonNullable.control<string>('', [
      dateValidator,
      futureDateValidator,
      pastDateValidator({ notBefore: DateTime.now().minus(Duration.fromObject({ years: 150 })) }),
    ]),
    sexoBiologico: this.fb.nonNullable.control<SexoBiologico | null>(null),
    registroProfissional: this.fb.nonNullable.control<string>('', {
      validators: Validators.required,
    }),
    rqe: this.fb.control<string>(''),
    especialidades: this.fb.nonNullable.control<ParceiroEspecialidade[]>([], {
      validators: Validators.required,
    }),
    experiencia: this.fb.nonNullable.control<string>('', { validators: [Validators.required, Validators.maxLength(1000)] }),
    idadeAtendimento: this.fb.nonNullable.control<string>('', { validators: [Validators.required, Validators.maxLength(50)] }),
    formasAtendimento: this.fb.nonNullable.control<FormaAtendimento[]>([], {
      validators: Validators.required,
    }),
    locaisAtendimento: this.fb.nonNullable.control<LocalAtendimento[]>([]),

    id: this.fb.nonNullable.control<number | null>(null),
    version: this.fb.nonNullable.control<number | null>(null),
  } satisfies Form<ParceiroProfissional>,
    {
      validators: [
        CustomFormParceiroValidator.ConditionalValidationLocalAtendimento('locaisAtendimento', 'formasAtendimento')
      ]
    }
  );

  public get formEnderecoProfissional(): FormGroup {
    return this.formProfissional.get('endereco') as FormGroup;
  }

  get profissional() {
    const basePath = environment.imgUrl;

    return {
      ...this.parseValue<ParceiroProfissional>(['cpf', 'telefone', 'cep']),
      pathImagem: removeImgPath(
        this.formProfissional.getRawValue().pathImagem,
        basePath
      ),
    };
  }

  get isDisableSubmit() {
    return !this.formProfissional.valid || this.isFormSaved;
  }

  get perguntasFrequentes() {
    return this.formProfissional.getRawValue().perguntasFrequentes ?? [];
  }
}
