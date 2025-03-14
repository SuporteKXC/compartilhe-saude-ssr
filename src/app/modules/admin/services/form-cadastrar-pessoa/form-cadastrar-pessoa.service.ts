import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ModalidadePessoaFisicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-fisica.enum';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';
import { FormBaseService } from 'src/app/modules/shared/services/form-base/form-base.service';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { CEP_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { ModalidadePessoaJuridicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-juridica.enum';

@Injectable({
  providedIn: 'root'
})
export class FormCadastrarPessoaService extends FormBaseService {

  constructor() {
    super();
  }

  public getFormBaseCadastrarPessoa() {
    return {
      modalidade: this.fb.nonNullable.control<ModalidadePessoaFisicaEnum | ModalidadePessoaJuridicaEnum | null>(null, {
        validators: Validators.required
      }),
      enderecos: this.fb.nonNullable.control<Endereco[] | null>([]),
      version: this.fb.nonNullable.control<number | null>(null),
      id: this.fb.nonNullable.control<number | null>(null),
    };
  }

  public cadastrarEndereco: FormGroup = this.fb.group({
    id: this.fb.nonNullable.control<number | null>(null),
    cep: this.fb.control<string | null>('', {
      validators: Validators.pattern(CEP_PATTERN),
    }),
    logradouro: this.fb.control<string | null>('', {
      validators: Validators.maxLength(255),
    }),
    numero: this.fb.control<string | null>('', { 
      validators: Validators.maxLength(20),
    }),
    complemento: this.fb.control<string | null>('', { 
      validators: Validators.maxLength(255), 
    }),
    bairro: this.fb.control<string | null>('', { 
      validators: Validators.maxLength(255) ,
    }),
    siglaUf: this.fb.control<string | null>(''),
    cidade: this.fb.control<Cidade | null>(null),
  });
}
