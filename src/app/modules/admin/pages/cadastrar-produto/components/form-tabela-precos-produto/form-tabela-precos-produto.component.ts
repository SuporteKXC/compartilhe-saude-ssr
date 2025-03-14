import { Component } from '@angular/core';
import { FormCadastrarPrecoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-preco/form-cadastrar-preco.service';
import { FormCadastrarProdutoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-produto.service';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';

@Component({
  selector: 'app-form-tabela-precos-produto',
  templateUrl: './form-tabela-precos-produto.component.html',
  styleUrls: ['./form-tabela-precos-produto.component.scss'],
})
export class FormTabelaPrecosProdutoComponent {
  protected visible = false;

  protected formaAtendimento = FormaAtendimentoEnum;

  constructor(
    protected formPrecoService: FormCadastrarPrecoService,
    protected formProdutoService: FormCadastrarProdutoService
  ) { }

  get titulo(): string {
    return this.formPrecoService.formTabelaValores.getRawValue().id 
      ? 'Editar preço' 
      : 'Adicionar preço';
  }
}
