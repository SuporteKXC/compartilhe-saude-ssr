import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { LAPTOP_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';

@Component({
  selector: 'app-secao-interesse',
  templateUrl: './secao-interesse.component.html',
  styleUrls: ['./secao-interesse.component.scss'],
})
export class SecaoInteresseComponent implements OnInit {
  @Input() data!: DetalhesProduto | undefined;

  protected skeletonArray = Array.apply(0, new Array(4)).map(() => 1);
  protected isShowScroll = true;

  protected responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 1,
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

  constructor(private window: WindowService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.window.size$.subscribe(size => {
      if (size.width > LAPTOP_WIDTH_SIZE) {
        this.isShowScroll = false;
      } else {
        this.isShowScroll = true;
      }
      this.cdr.detectChanges();
    });
  }

  resetData() {
    this.data = undefined;
  }
}
