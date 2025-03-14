import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormCadastrarProdutoService } from 'src/app/modules/admin/services/form-cadastrar-produto/form-cadastrar-produto.service';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-form-produtos-relacionados',
  templateUrl: './form-produtos-relacionados.component.html',
  styleUrls: ['./form-produtos-relacionados.component.scss'],
})
export class FormProdutosRelacionadosComponent implements OnChanges {
  @Input() produtosInteresse!: Produto[];
  @Input() idProduto!: number;

  @Output() changeForm = new EventEmitter<boolean>();

  public produtos: SelectOption<Produto>[] = [];

  private currentPage = 1;
  private numPages?: number;
  public pageSize = 60;

  constructor(
    protected formCadastrarProdutoService: FormCadastrarProdutoService,
    private produtosService: ProdutosService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['produtosInteresse'] && this.produtosInteresse) {
      this.loadProdutosPage();
    }
  }

  public loadProdutosPage() {
    const listaIdProduto: number[] = [];
    
    if (this.produtosInteresse) {
      listaIdProduto.push(...this.produtosInteresse.map(produto => produto.id));
    }

    if (this.currentPage <= (this.numPages ?? Infinity)) {
      this.produtosService
        .listarProdutosInteresse(
          { page: this.currentPage, pageSize: this.pageSize }, listaIdProduto)
        .subscribe((produtos) => {
          const selectOptions = this.produtos.concat(
            this.convertPaginantedProdutosToSelectOption(produtos)
          );

          if (this.produtosInteresse) {
            const setProdutosInteresse = new Set(selectOptions.map(produto => produto.value.id));
            const produtosInteresse = this.produtosInteresse.filter(produto => setProdutosInteresse.has(produto.id));
            this.formCadastrarProdutoService.formProduto.patchValue({ produtosInteresse: produtosInteresse });
            this.changeForm.emit();
          }

          this.numPages = produtos.metadata.numPages;
          this.produtos = selectOptions;
        });
    }

    this.currentPage++;
  }

  private convertPaginantedProdutosToSelectOption(
    produtos: PaginatedContent<Produto>
  ): SelectOption<Produto>[] {
    return produtos.data.map((produto) => ({ label: produto.nome, value: produto }));
  }

  get produtosCustomErros() {
    return {
      maxlength: 'Escolha no máximo 4 produtos.',
    };
  }
}
