import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { ProdutoResumo } from 'src/app/modules/admin/pages/gestao-produtos/models/produto-resumo.model';
import { AutocompleteItem } from 'src/app/modules/shared/components/form/autocomplete/models/autocomplete-item.model';
import {
  getProdutoLabel,
  PRODUTOS_DYNAMIC_ROUTES,
} from 'src/app/modules/shared/constants/produtos.constants';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { getDynamicPath } from 'src/app/modules/shared/models/card-dynamic-routes.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-chamada-principal',
  templateUrl: './chamada-principal.component.html',
  styleUrls: ['./chamada-principal.component.scss'],
})
export class ChamadaPrincipalComponent {
  protected autoCompleteItens!: AutocompleteItem<ProdutoResumo>[];
  protected categoriaProduto = CategoriaProduto;
  protected isBrowser = false;

  protected form = this.fb.nonNullable.group({
    busca: new FormControl<ProdutoResumo | null>({ value: null, disabled: false }),
  });

  protected getProdutoLabel = getProdutoLabel;

  private query = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private produtosService: ProdutosService,
    @Inject(PLATFORM_ID) private plataformId: string
  ) {
    this.isBrowser = isPlatformBrowser(this.plataformId);
  }

  getItens(event: AutoCompleteCompleteEvent): void {
    this.query = event.query;

    this.produtosService.listarProdutosResumo({ page: 1, pageSize: 4 }, { nome: this.query })
      .subscribe((produtos) => {
        this.autoCompleteItens = this.convertToAutocompleteItems(produtos);
      });
  }

  convertToAutocompleteItems(produtos: ProdutoResumo[]): AutocompleteItem<ProdutoResumo>[] {
    return produtos.map((produto) => ({
      itemLabel: produto.nome,
      value: {
        id: produto.id,
        nome: produto.nome,
        categoria: produto.categoria,
      },
    }));
  }

  navigateToProduto(): void {
    const busca = this.form.getRawValue().busca;

    if (busca) {
      const { id, nome, categoria } = busca;

      this.router.navigate([
        getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, categoria),
        'detalhes',
        id,
        parseToUrl(nome),
      ]);
    }
  }

  get emptyMessageSearch(): string | undefined {
    if (this.query) return `Nenhum resultado encontrado para ${this.query}`;
    else return undefined;
  }
}
