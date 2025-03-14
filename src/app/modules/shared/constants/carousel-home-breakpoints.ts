import { CarouselResponsiveOptions } from 'primeng/carousel';

export const CAROUSEL_HOME_BREAKPOINT: CarouselResponsiveOptions[] = [
  {
    breakpoint: '1400',
    numVisible: 6,
    numScroll: 1,
  },
  {
    breakpoint: '1080px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '576px',
    numVisible: 1,
    numScroll: 1,
  },
];

