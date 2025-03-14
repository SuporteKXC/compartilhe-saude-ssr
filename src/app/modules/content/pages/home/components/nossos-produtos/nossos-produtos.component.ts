import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { CAROUSEL_HOME_BREAKPOINT } from 'src/app/modules/shared/constants/carousel-home-breakpoints';
import { LAPTOP_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { PRODUTOS_LABEL } from 'src/app/modules/shared/constants/produtos.constants';
import { ProdutoLabel } from 'src/app/modules/shared/models/produto/produto-label.model';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';

@Component({
  selector: 'app-nossos-produtos',
  templateUrl: './nossos-produtos.component.html',
  styleUrls: ['./nossos-produtos.component.scss'],
})
export class NossosProdutosComponent implements OnInit {
  protected products: ProdutoLabel[] = PRODUTOS_LABEL;
  protected carouselBreakPoints: CarouselResponsiveOptions[] = CAROUSEL_HOME_BREAKPOINT;
  protected isBrowser = false;

  private pageWidth!: number;

  constructor(
    private windowService: WindowService
  ) { }

  ngOnInit(): void {
    this.windowService.size$.subscribe((windowSize) => {
      this.pageWidth = windowSize.width;
    });
  }

  get isShowScroll(): boolean {
    return this.pageWidth <= LAPTOP_WIDTH_SIZE;
  }
}
