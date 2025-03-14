import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoResumo } from '../../models/produto-resumo.model';
import { TableComponent } from 'src/app/modules/shared/components/layout/table/table.component';
import { FormFiltroGestaoProdutosService } from '../../services/form-filtro-gestao-produtos/form-filtro-gestao-produtos.service';
import { ProdutosAdmService } from 'src/app/modules/admin/services/produtos-adm/produtos-adm.service';
import { Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { CategoriaProduto } from '../../enums/CategoriaProduto';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';


@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {
  @ViewChild('table', { static: true }) table?: TableComponent;

  @Input() shouldSearchAgain$!: Subject<void>;

  protected page = 1;
  protected pageSize = 15;

  public produtos: ProdutoResumo[] = [];
  public totalProdutos = 0;

  public isLoading = false;

  constructor(
    private form: FormFiltroGestaoProdutosService,
    private produtoService: ProdutosAdmService,
    private navigation: NavigationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shouldSearchAgain$.subscribe(() => {
      this.totalProdutos = 0;
      this.produtos = [];

      this.table?.resetTable();

      this.getProdutos();
    });

    this.getProdutos();
  }

  getProdutos() {
    this.isLoading = true;

    const filtros = this.form.group.getRawValue();
    const queryParams = { page: this.page, pageSize: this.pageSize };
    this.produtoService.listarProdutosAdm(queryParams, filtros).subscribe({
      next: (response) => {
        this.produtos = this.produtos.concat(response.data);
        this.totalProdutos = response.metadata.numRecords;
      }
    }).add(() => this.isLoading = false);
  }

  navigateToEdicaoParceiro(id: number, categoria: string) {
    this.navigation.setState({ categoria });
    this.router.navigate([
      'admin',
      'dashboard',
      'produtos-compartilhe',
      id,
      parseToUrl(categoria),
      'editar',
    ]);
  }

  getCategoria(categoria: string) {
    return CategoriaProduto[categoria as keyof typeof CategoriaProduto];
  }

  getSubcategoria(produto: ProdutoResumo) {
    return produto.subcategoria ? produto.subcategoria.descricao : '';
  }
}
