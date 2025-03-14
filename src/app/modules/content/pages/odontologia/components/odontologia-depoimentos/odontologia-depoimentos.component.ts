import { Component } from '@angular/core';
import { CardDepoimento } from 'src/app/modules/content/models/card-depoimento.model';

@Component({
  selector: 'app-odontologia-depoimentos',
  templateUrl: './odontologia-depoimentos.component.html',
  styleUrls: ['./odontologia-depoimentos.component.scss'],
})
export class OdontologiaDepoimentosComponent {
  public depoimentos: CardDepoimento[] = [
    {
      img: '/Depoimentos/Tais+Santana+Zequinelli.jpeg',
      altImg:
        'Uma pessoa com cabelos curtos, óculos escuros de camiseta branca, e ao fundo vemos uma grama verde.',
      texto:
        'Estou muito satisfeita em todos aspectos, com as meninas da recepção sempre atenciosas, buscando deixar os pacientes sempre à vontade. E o Dr João sempre muito cuidadoso e paciente. Estou gostando e super indico.',
      nome: 'Thais Santana Zequinelli',
    },
    {
      img: '/Depoimentos/Tainara+Nobre.jpeg',
      altImg: 'Uma mulher de cabelos longos e escuros usando uma roupa colorida',
      texto:
        'Fiz limpeza e restauração na Compartilhe Saúde e Sorrisos e fiquei super satisfeita. O dentista muito detalhista e atencioso, um excelente atendimento, assim como das consultoras. Indico sempre para meus amigos e familiares. Pretendo retornar para dar continuidade no tratamento odontológico. Nota 10!',
      nome: 'Tainara Nobre',
    },
    {
      img: '/Depoimentos/Amanda+Pereira+Silva.jpeg',
      altImg: 'Uma mulher sorrindo, de cabelos longos cacheados e escuros.',
      texto:
        'Os dentistas super atenciosos, amei o atendimento porque sempre tive medo de dentista e eles tiveram muita paciência comigo, principalmente o Dr João Vitor!! Com certeza farei mais procedimentos com ele, mega atencioso e cuidadoso!',
      nome: 'Amanda Pereira Silva',
    },
    {
      img: '/Depoimentos/Ediana+da+Costa+de+Jesus.jpeg',
      altImg: 'Uma mulher de cabelos curtos, escuros e de óculos de sol.',
      texto:
        'Meu atendimento foi excelente. O Dr é muito educado e atencioso. Trabalho excelente! As meninas da recepção foram muito atenciosas comigo. A Compartilhe está de parabéns.',
      nome: 'Ediana da Costa de Jesus',
    },
  ];
}
