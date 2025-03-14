import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { ProdutoFiltro } from 'src/app/modules/content/models/pacote-filtro.model';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { MOBILE_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';


@Component({
  selector: 'app-secao-produtos',
  templateUrl: './secao-produtos.component.html',
  styleUrls: ['./secao-produtos.component.scss']
})
export class SecaoProdutosComponent implements OnInit{
  @Input({required: true}) tituloSecao = '';
  @Input({required: true}) searchLabel = '';
  @Input() labelSrOnly = true;
  @Input({required: true}) categorias!: CategoriaProduto[];

  protected isError = false;
  protected isLoading = false;
  protected mobileSize = 4;
  protected size = 8;

  protected totalRecords!: number;
  protected produtos: Produto[] = [];

  protected queryParams: PageableParams = { page: 1 };

  protected formFiltro = this.fb.group<Form<{ nome: string | null}>>({
    nome: this.fb.control<string>(''),
  });

  get nomeValue() {
    return this.formFiltro.getRawValue().nome;
  }

  constructor(
    private fb: FormBuilder, 
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    if (window) {
      const windowWidth = window.innerWidth;
      this.queryParams.pageSize = windowWidth <= MOBILE_WIDTH_SIZE ? this.mobileSize : this.size;
      this.getProdutos();
    }
  }

  protected getProdutos() {
    const filtro: ProdutoFiltro = {
      nome: this.nomeValue,
      categoria: this.categorias
    };

    this.isLoading = true;

    this.produtosService.listarProdutos(this.queryParams, filtro).subscribe({
      next: (response: PaginatedContent<Produto>) => {
        this.isError = false;
        this.produtos.push(...response.data);
        this.totalRecords = response.metadata.numRecords;
      },
      error: () => {
        this.isError = true;
      },
    }).add(() => this.isLoading = false);
  }

  searchProdutos() {
    this.produtos = [];
    this.queryParams.page = 1;
    this.getProdutos();
  }
}
