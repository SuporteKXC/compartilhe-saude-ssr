import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dados-empresa',
  templateUrl: './form-dados-empresa.component.html',
  styleUrls: ['./form-dados-empresa.component.scss']
})
export class FormDadosEmpresaComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  public get cnpjCustomErrors() {
    return {
      invalidCnpj: 'Por favor, indique um CNPJ válido.',
    };
  }

  public get telefoneCustomErrors() {
    return {
      pattern: 'Por favor, indique um telefone válido.',
    };
  }
}
