import { Component } from '@angular/core';
import { FormCadastrarEstabelecimentoService } from 'src/app/modules/admin/services/form-cadastrar-estabelecimento/form-cadastrar-estabelecimento.service';

@Component({
  selector: 'app-form-dados-estabelecimento',
  templateUrl: './form-dados-estabelecimento.component.html',
  styleUrls: ['./form-dados-estabelecimento.component.scss']
})
export class FormDadosEstabelecimentoComponent {

  constructor(protected formService: FormCadastrarEstabelecimentoService) {}

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

  public get linkImageCustomErrors() {
    return {
      invalidLinkImage: 'Por favor, indique um link válido.',
    };
  }
}
