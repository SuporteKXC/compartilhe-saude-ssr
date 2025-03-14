import { Component } from '@angular/core';
import { FormCadastrarEstabelecimentoService } from 'src/app/modules/admin/services/form-cadastrar-estabelecimento/form-cadastrar-estabelecimento.service';

@Component({
  selector: 'app-form-parceiro',
  templateUrl: './form-parceiro.component.html',
  styleUrls: ['./form-parceiro.component.scss']
})
export class FormParceiroComponent {

  constructor(protected formService: FormCadastrarEstabelecimentoService) {}
}
