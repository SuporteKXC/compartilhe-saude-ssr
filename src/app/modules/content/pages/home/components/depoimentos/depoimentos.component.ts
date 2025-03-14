import { Component } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { CardDepoimento } from 'src/app/modules/content/models/card-depoimento.model';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent {
  public depoimentos: CardDepoimento[] = [
    {
      img: '/assets/Images/depoimentos-marcial-leal.jpg',
      altImg:
        'Foto de Márcia Leal Passos, uma mulher de cabelo escuro comprido e sorriso amigável.',
      texto:
        'Eu só tenho a agradecer a Compartilhe Saúde, porque nos momentos mais difíceis da saúde da minha mãe, do meu esposo e para mim, fomos super bem a atendidos. Com muita atenção e cuidado, a Compartilhe é nota 10.',
      nome: 'Márcia Leal Passos',
    },
    {
      img: '/assets/Images/depoimentos-rhonia-sabadim.jpg',
      altImg:
        'Foto de Ronnya Sabadim Machado, uma mulher de cabelo loiro sorridente usando maquiagem, grandes brincos e vestido laranja.',
      texto:
        'A Compartilhe Saúde apareceu na minha vida em um momento muito complicado. Conheci em 2021 e estou até hoje. As consultoras não medem esforços para buscar o melhor atendimento. Na Compartilhe têm excelentes profissionais!',
      nome: 'Ronnya Sabadim Machado',
    },
    {
      img: '/assets/Images/depoimentos-maria-da-penha.jpg',
      altImg:
        'Foto de Maria Da Penha Família Monteiro, uma senhora posa junto a galhos de árvore com flores que combinam com sua roupa cor-de-rosa.',
      texto:
        'A Compartilhe Saúde é uma plataforma de benefícios muito boa. Eu estou muito satisfeita, pois tive que fazer vários exames e uma cirurgia e o desconto foi muito satisfatório. Agora estou indicando para toda minha família!',
      nome: 'Maria Da Penha Família Monteiro',
    },
    {
      img: '/assets/Images/depoimentos-anna-caroline.jpg',
      altImg:
        'Foto de Anna Caroline Oliveira Motta Taroco, uma mulher de cabelo escuro, jovem, sorrindo e segurando um menino no colo. Atrás deles há um gramado e uma estrutura de madeira.',
      texto:
        'Sempre fui atendida com muita atenção e cuidado. As consultoras realizam um trabalho impecável, dispostas a entregar um atendimento de qualidade. Somos tratados com respeito e atenção. Recomendo cuidar da saúde com a Compartilhe!',
      nome: 'Anna Caroline Oliveira Motta Taroco',
    },
  ];

  protected responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
