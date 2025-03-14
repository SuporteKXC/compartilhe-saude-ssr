import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { cnpjValidator } from 'src/app/modules/shared/validators/cnpj-validator/cnpj-validator';
import { ParceiroEstabelecimento } from '../../models/parceiro-estabelecimento.model';
import { FormCadastrarParceiroService } from '../form-cadastrar-parceiro/form-cadastrar-parceiro.service';
import { CategoriaParceiroEnum } from '../../pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { TipoEstabelecimento } from '../../../shared/models/parceiro/tipo-estabelecimento.model';
import { environment } from 'src/environments/environment';
import { removeImgPath } from 'src/app/modules/shared/functions/util/image-path';

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarEstabelecimentoService extends FormCadastrarParceiroService {

  constructor() {
    super();
    this.formGroup = this.formEstabelecimento;
    this.checkChanges(this.formEstabelecimento);
  }

  public formEstabelecimento = this.fb.group({
    ...this.getFormBaseCadastrarParceiro(CategoriaParceiroEnum.ESTABELECIMENTO),
    cnpj: this.fb.control('', { validators: [Validators.required, cnpjValidator] }),
    nomeContato: this.fb.control('', { validators: Validators.maxLength(255) }),

    tiposEstabelecimento: this.fb.nonNullable.control<TipoEstabelecimento[]>([], {
      validators: Validators.required,
    }),

    parceiro: this.fb.nonNullable.control(true),

    id: this.fb.nonNullable.control<number | null>(null),
    version: this.fb.nonNullable.control<number | null>(null),

  } satisfies Form<ParceiroEstabelecimento>);

  public get formEnderecoEstabelecimento(): FormGroup {
    return this.formEstabelecimento.get('endereco') as FormGroup;
  }

  public get isParceiro(): boolean {
    return this.formEstabelecimento.getRawValue().parceiro;
  }

  public get estabelecimento() {
    const basePath = environment.imgUrl;

    return {
      ...this.parseValue<ParceiroEstabelecimento>(['cnpj', 'telefone', 'cep']),
      pathImagem: removeImgPath(
        this.formEstabelecimento.getRawValue().pathImagem,
        basePath
      ),
    };
  }

  public get isDisableSubmit(): boolean {
    return !this.formEstabelecimento.valid || this.isFormSaved;
  }

  public clearRequiredValidator() {
    const requiredInputs = [
      'cnpj',
      'tiposEstabelecimento',
      'servicos',
      'sobre',
      'formasPagamento',
      'convenios',
      'modalidade'
    ];

    if (!this.isParceiro) {
      requiredInputs.forEach(input => {
        this.formEstabelecimento.get(input)?.clearValidators();
        if (input === 'cnpj') {
          this.formEstabelecimento.get(input)?.setValidators([cnpjValidator]);
        }
        this.formEstabelecimento.get(input)?.updateValueAndValidity();
      });
    } else {
      requiredInputs.forEach(input => {
        this.formEstabelecimento.get(input)?.setValidators([Validators.required]);
        if (input === 'cnpj') {
          this.formEstabelecimento.get(input)?.setValidators([Validators.required, cnpjValidator]);
        }
        this.formEstabelecimento.get(input)?.updateValueAndValidity();
      });
    }
  }

  get perguntasFrequentes() {
    return this.formEstabelecimento.getRawValue().perguntasFrequentes ?? [];
  }
}
