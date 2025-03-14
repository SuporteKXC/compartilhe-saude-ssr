import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { catchError, Observable, of } from 'rxjs';
import { ProdutoResumo } from 'src/app/modules/admin/pages/gestao-produtos/models/produto-resumo.model';
import { TABLET_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { getProdutoLabel, PRODUTOS_DYNAMIC_ROUTES } from 'src/app/modules/shared/constants/produtos.constants';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { getDynamicPath } from 'src/app/modules/shared/models/card-dynamic-routes.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';

@Component({
  selector: 'app-secao-produtos-destaque',
  templateUrl: './secao-produtos-destaque.component.html',
  styleUrls: ['./secao-produtos-destaque.component.scss']
})
export class SecaoProdutosDestaqueComponent implements OnInit {
  protected produtos$!: Observable<ProdutoResumo[]>;
  protected pageSize = 5;
  protected isError = false;

  protected overflow = true;

  protected getProdutoLabel = getProdutoLabel;

  protected isBrowser = false;

  constructor(
    private window: WindowService,
    private produtosService: ProdutosService,
    private router: Router,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);

    if (this.isBrowser) {
      const width = window.innerWidth;

      if (width >= TABLET_WIDTH_SIZE) {
        this.overflow = false;
        this.pageSize = 15;
      } else {
        this.overflow = true;
        this.pageSize = 5;
      }
    }

    this.produtos$ = this.produtosService.listarProdutosResumo(
      { page: 1, pageSize: this.pageSize },
      { destaque: true }
    ).pipe(
      catchError((error) => {
        if (error) this.isError = true;
        return of([]);
      })
    );
  }

  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400',
      numVisible: 5,
      numScroll: 5,
    },
    {
      breakpoint: '1080px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  navigateToProduto(produto: ProdutoResumo): void {
    this.router.navigate([
      getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, produto.categoria),
      'detalhes',
      produto.id,
      parseToUrl(produto.nome),
    ]);
  }
}
