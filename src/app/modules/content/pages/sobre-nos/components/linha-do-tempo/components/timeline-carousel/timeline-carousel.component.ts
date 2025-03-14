import { Component, Input } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-timeline-carousel',
  templateUrl: './timeline-carousel.component.html',
  styleUrls: ['./timeline-carousel.component.scss'],
})
export class TimelineCarouselComponent {
  @Input() timelineItems!: { text: string; year: number; img: string; altImg: string }[];

  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
