import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormCadastrarProdutoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-produto.service';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';
import { CategoriaProduto } from '../../../gestao-produtos/enums/CategoriaProduto';
import { ProdutoSubcategoria } from 'src/app/modules/admin/models/produto-subcategoria.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';

@Component({
  selector: 'app-form-dados-produto',
  templateUrl: './form-dados-produto.component.html',
  styleUrls: ['./form-dados-produto.component.scss'],
})
export class FormDadosProdutoComponent implements OnInit {
  private _titulo!: string;

  @Input()
  set titulo(val: string) {
    this._titulo = val;
  }

  get categoria(): CategoriaProduto {
    return CategoriaProduto[this._titulo as keyof typeof CategoriaProduto];
  }

  public subcategoriaOptions: SelectOption<ProdutoSubcategoria>[] = [];

  protected form!: FormGroup;

  public get linkImageCustomErrors() {
    return {
      invalidLinkImage: 'Por favor, indique um link válido.',
    };
  }

  constructor(
    private formCadastrarProdutoService: FormCadastrarProdutoService,
    private produtosService: ProdutosService,
  ) {
    this.form = formCadastrarProdutoService.formProduto;
  }

  ngOnInit(): void {
    const categoria = enumNameFromEnumValue(CategoriaProduto, this.categoria);

    if (categoria) {
      this.produtosService.listarSubcategorias([categoria as CategoriaProduto]).subscribe((response) => {
        this.subcategoriaOptions = response.map((subcategoria) => ({
          label: subcategoria.descricao,
          value: {
            id: subcategoria.id,
            categoria: subcategoria.categoria,
            descricao: subcategoria.descricao,
          },
        }));
      });
    }
  }
}
