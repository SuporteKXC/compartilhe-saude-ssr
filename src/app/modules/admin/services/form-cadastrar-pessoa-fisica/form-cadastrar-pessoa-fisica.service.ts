import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormCadastrarPessoaService } from '../form-cadastrar-pessoa/form-cadastrar-pessoa.service';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { RendaSalarioMinimo } from 'src/app/modules/shared/enums/renda-salario-minimo.enum';
import { EstadoCivil } from 'src/app/modules/shared/enums/estado-civil.enum';
import { cpfValidator } from 'src/app/modules/shared/validators/cpf-validator/cpf-validator';
import { dateValidator } from 'src/app/modules/shared/validators/date-validator/date-validator';
import { futureDateValidator } from 'src/app/modules/shared/validators/future-date-validator/future-date-validator';
import { pastDateValidator } from 'src/app/modules/shared/validators/past-date-validator/past-date-validator';
import { DateTime, Duration } from 'luxon';
import { TELEFONE_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { PessoaFisica } from '../../models/pessoa-fisica.model';

@Injectable({
  providedIn: 'root'
})
export class FormCadastrarPessoaFisicaService extends FormCadastrarPessoaService {

  public cadastrarPessoaFisica: FormGroup = this.fb.group<Form<PessoaFisica>>({
    ...this.getFormBaseCadastrarPessoa(),
    id: this.fb.nonNullable.control<number | null>(null),
    nome: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(255)
      ]
    }),
    cpf: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        cpfValidator
      ]
    }),
    dataNascimento: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        dateValidator,
        futureDateValidator,
        pastDateValidator({
          notBefore: DateTime.now().minus(Duration.fromObject({ years: 150 }))
        }),
      ]
    }),
    sexoBiologico: this.fb.nonNullable.control<SexoBiologico | null>(null),
    estadoCivil: this.fb.control<EstadoCivil | null>(null),
    profissao: this.fb.control<string>('', { validators: Validators.maxLength(255) }),
    contatoWhatsapp: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.pattern(TELEFONE_PATTERN)
      ]
    }),
    email: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    rendaSalarioMinimo: this.fb.control<RendaSalarioMinimo | null>(null),
  });

  constructor() {
    super();
    this.formGroup = this.cadastrarPessoaFisica;
    this.checkChanges([
      this.cadastrarPessoaFisica, 
      this.cadastrarEndereco
    ]);
  }

  get pessoaFisica() {
    this.cadastrarPessoaFisica.get('enderecos')?.setValue([this.cadastrarEndereco.getRawValue()]);
    
    return this.parseValue<PessoaFisica>(
      ['cpf', 'contatoWhatsapp', 'cep']
    );
  }

  reset() {
    this.cadastrarPessoaFisica.reset();
    this.cadastrarEndereco.reset();
    this.save();
  }

  get isDisableSubmit() {
    const formGroups = [
      this.cadastrarPessoaFisica, 
      this.cadastrarEndereco
    ];
    const validFormGroups = formGroups.every(group => group.valid === true);
    return !(validFormGroups) || this.isFormSaved;
  }
}
