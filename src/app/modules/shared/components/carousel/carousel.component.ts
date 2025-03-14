import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { Carousel, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnInit {
  @ViewChild(Carousel) carouselComponent?: Carousel;

  @Input() itemTemplate!: TemplateRef<unknown>;

  @Input() numVisible = 4;
  @Input() numScroll = 1;
  @Input() circular = false;
  @Input() autoplayInterval = 0;
  @Input() overflow = true;
  @Input() showScroll = true;

  @Input() items!: unknown[];

  @Input() slider = false;

  @Input() responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1220px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1100px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  public viewInitDone = false;

  protected isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private plataformId: string
  ) {
    // HACK O primeng por algum motivo da um prevent default no onTouchMove do carrossel,
    // que faz com que usuários mobile não consigam scrollar para baixo
    // https://github.com/primefaces/primeng/issues/13266
    Carousel.prototype.onTouchMove = (): void => undefined;
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.viewInitDone = true));
  }

  public get showNavigators(): boolean {
    return (
      this.showScroll &&
      this.viewInitDone &&
      !!this.carouselComponent &&
      this.carouselComponent.numVisible < this.items.length
    );
  }
}
