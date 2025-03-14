import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { catchError, Observable, of } from 'rxjs';
import { TABLET_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { ParceiroDestaqueResumo } from 'src/app/modules/shared/models/parceiro/parceiro-destaque-resumo';
import { JoinStringPipe } from 'src/app/modules/shared/pipes/join-string.pipe';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secao-parceiros-destaque',
  templateUrl: './secao-parceiros-destaque.component.html',
  styleUrls: ['./secao-parceiros-destaque.component.scss']
})
export class SecaoParceirosDestaqueComponent implements OnInit {
  protected parceiros$!: Observable<PaginatedContent<ParceiroDestaqueResumo> | null>;
  protected pageSize = 5;
  protected isError = false;
  protected totalRecords = 0;
  protected currentPage = 1;

  protected numVisible = 1;
  protected numScroll = 1;
  protected overflow = true;

  protected imgUrl = environment.imgUrl;

  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 5,
    },
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  protected isBrowser = false;

  constructor(
    private window: WindowService,
    private router: Router,
    private parceirosService: ParceirosService,
    private joinStringPipe: JoinStringPipe,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) { }

  ngOnInit(): void {
    const desktopSliderSize = 5;
    const mobileSliderSize = 1;

    this.isBrowser = isPlatformBrowser(this.plataformId);

    if (this.isBrowser) {
      const width = window.innerWidth;

      if (width <= TABLET_WIDTH_SIZE) {
        this.numVisible = desktopSliderSize;
        this.numScroll = desktopSliderSize;
        this.overflow = false;
        this.pageSize = 15;
      } else {
        this.numVisible = mobileSliderSize;
        this.numScroll = mobileSliderSize;
        this.overflow = true;
        this.pageSize = 5;
      }
    }

    this.parceiros$ = this.parceirosService
      .listarParceiroDestaque(this.currentPage, this.pageSize)
      .pipe(
        catchError(() => {
          this.isError = true;
          return of(null);
        })
      );
  }

  navigateToDetalhes(data: ParceiroDestaqueResumo) {
    const routePath = [
      '/nossos-parceiros',
      'detalhes',
      data.id,
      parseToUrl(data.nome),
    ];

    this.router.navigate(
      routePath.filter(
        segment => Boolean(segment)
      )
    );
  }

  getDescricaoList(data: { id: number, descricao: string }[]): string {
    return this.joinStringPipe.transform(data.map(item => item.descricao), { separator: ' | ', includeAnd: false });
  }

  getFormaAtendimento(apresentarOnline: boolean) {
    const formaAtendimento = apresentarOnline ? FormaAtendimentoEnum.ONLINE : FormaAtendimentoEnum.PRESENCIAL;
    const enumName = enumNameFromEnumValue(FormaAtendimentoEnum, formaAtendimento);
    return parseToUrl(enumName);
  }
}
