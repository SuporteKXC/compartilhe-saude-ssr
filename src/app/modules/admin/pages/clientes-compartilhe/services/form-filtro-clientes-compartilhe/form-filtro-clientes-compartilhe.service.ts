import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstadoCivil } from 'src/app/modules/shared/enums/estado-civil.enum';
import { ModalidadePessoaFisicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-fisica.enum';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { onlyDigits } from 'src/app/modules/shared/functions/util/only-digits';
import { FaixaEtaria } from 'src/app/modules/admin/models/faixa-etaria.model';
import { FiltroPessoas } from 'src/app/modules/admin/models/filtro-pessoas.mode';

@Injectable({
  providedIn: 'root'
})
export class FormFiltroClientesCompartilheService {

  public filtro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtro = this.fb.group<Form<FiltroPessoas>>({
      tipoCliente: this.fb.control<TipoClienteEnum | null>(null),
      texto: this.fb.control<string | null>(null),
      estado: this.fb.control<string | null>(null),
      cidade: this.fb.control<Cidade | null>(null),
      sexoBiologico: this.fb.control<SexoBiologico | null>(null),
      estadoCivil: this.fb.control<EstadoCivil | null>(null),
      faixaEtaria: this.fb.control<FaixaEtaria | null>(null),
      telefone: this.fb.control<string | null>(null),
      modalidade: this.fb.control<ModalidadePessoaFisicaEnum | null>(null),
    });
  }

  get isPessoaJuridica() {
    const pessoaJuridica = enumNameFromEnumValue(TipoClienteEnum, TipoClienteEnum.PESSOA_JURIDICA) as TipoClienteEnum;
    return this.filtro.getRawValue().tipoCliente === pessoaJuridica;
  }

  get hasTipoCliente() {
    return Boolean(this.filtro.getRawValue().tipoCliente);
  }

  get pessoaFisicaValues() {
    const filtro = this.filtro.getRawValue();
    const telefone = this.filtro.getRawValue().telefone;
    if (telefone) {
      filtro.contatoWhatsapp = onlyDigits(telefone);
      delete filtro.telefone;
    }
    return filtro;
  }

  get pessoaJuridicaValues() {
    const filtro = this.filtro.getRawValue();
    const telefone = this.filtro.getRawValue().telefone;
    if (telefone) {
      filtro.telefone = onlyDigits(telefone);
      delete filtro.contatoWhatsapp;
    }
    return filtro;
  }

  reset() {
    const nonResettableKey = 'tipoCliente';
    Object.keys(this.filtro.controls).forEach(control => {
      if (control !== nonResettableKey) {
        this.filtro.get(control)?.reset();
      }
    });

    const tipoCliente = this.filtro.getRawValue().tipoCliente;
    if (tipoCliente) {
      this.filtro.get('cidade')?.enable();
    } else {
      this.filtro.get('cidade')?.disable();
    }
  }

  private configureFormControls() {
    this.filtro.get('tipoCliente')?.valueChanges.subscribe((tipoCliente) => {
      if (tipoCliente === TipoClienteEnum.PESSOA_JURIDICA) {
        this.filtro.get('sexoBiologico')?.disable();
        this.filtro.get('estadoCivil')?.disable();
        this.filtro.get('faixaEtaria')?.disable();
      } else {
        this.filtro.get('sexoBiologico')?.enable();
        this.filtro.get('estadoCivil')?.enable();
        this.filtro.get('faixaEtaria')?.enable();
      }
    });
  }
}
