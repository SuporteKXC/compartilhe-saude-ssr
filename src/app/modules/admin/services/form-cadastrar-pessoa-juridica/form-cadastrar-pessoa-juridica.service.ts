import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormCadastrarPessoaService } from '../form-cadastrar-pessoa/form-cadastrar-pessoa.service';
import { cnpjValidator } from 'src/app/modules/shared/validators/cnpj-validator/cnpj-validator';
import { TELEFONE_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { PessoaJuridica } from '../../models/pessoa-juridica.model';
import { Form } from 'src/app/modules/shared/interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class FormCadastrarPessoaJuridicaService extends FormCadastrarPessoaService {

  public cadastrarPessoaJuridica: FormGroup = this.fb.group<Form<PessoaJuridica>>({
    ...this.getFormBaseCadastrarPessoa(),
    nome: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        Validators.maxLength(255)
      ]
    }),
    cnpj: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        cnpjValidator
      ]
    }),
    telefone: this.fb.nonNullable.control<string>('', {
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
    pessoaDeContato: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.maxLength(255),
      ]
    }),
  });

  constructor() { 
    super();
    this.formGroup = this.cadastrarPessoaJuridica;
    this.checkChanges([
      this.cadastrarPessoaJuridica, 
      this.cadastrarEndereco
    ]);
  }

  get pessoaJuridica() {
    this.cadastrarPessoaJuridica.get('enderecos')?.setValue([this.cadastrarEndereco.getRawValue()]);
    
    return this.parseValue<PessoaJuridica>(
      ['cnpj', 'telefone', 'cep']
    );
  }

  reset() {
    this.cadastrarPessoaJuridica.reset();
    this.cadastrarEndereco.reset();
    this.save();
  }

  get isDisableSubmit() {
    const formGroups = [
      this.cadastrarPessoaJuridica, 
      this.cadastrarEndereco
    ];
    const validFormGroups = formGroups.every(group => group.valid === true);
    return !(validFormGroups) || this.isFormSaved;
  }
}
