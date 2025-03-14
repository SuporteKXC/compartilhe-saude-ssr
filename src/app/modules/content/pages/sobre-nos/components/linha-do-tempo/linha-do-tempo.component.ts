import { Component } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.scss'],
})
export class LinhaDoTempoComponent {
  public timelineItems = [
    {
      text: 'Nasce a Compartilhe Saúde no Facebook, compartilhando informações essenciais de saúde.',
      year: 2017,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2017.jpg`,
      altImg: 'Logomarca da Compartilhe Saúde, uma mão com o polegar para cima.',
    },
    {
      text: 'Iniciamos as operações, credenciando parceiros e oferecendo descontos em exames e serviços médicos.',
      year: 2019,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2019.jpg`,
      altImg: 'Pessoa de jaleco branco, segurando uma caneta e escrevendo uma prescrição médica.',
    },
    {
      text: 'Inauguramos a unidade em Pinheiros - ES, levando especialidades médicas de alta qualidade à comunidade.',
      year: 2020,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2020.jpg`,
      altImg: 'Fachada da unidade Compartilhe Saúde de Pinheiros em uma parede de fundo azul.',
    },
    {
      text: 'Com o nascimento da Compartilhe Sorrisos, inauguramos nossa unidade em São Mateus, ES, ampliando nossa atuação e introduzindo soluções empresariais.',
      year: 2021,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2021.jpg`,
      altImg:
        'Logomarca com os dizeres Compartilhe Sorrisos em um fundo azul e um ícone de dente com um sorriso.',
    },
    {
      text: 'Lançamos o Saúde Invest, um produto exclusivo da Compartilhe Saúde, proporcionando economia e serviços sob demanda.',
      year: 2022,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2022.jpg`,
      altImg: 'Logomarca com os dizeres Compartilhe Invest Saúde, em fundo preto.',
    },
    {
      text: 'Passamos a atender em Conceição da Barra - ES, em parceria com a Clínica Cuidar, onde oferecemos consultas, exames e procedimentos médicos. Nosso compromisso com a saúde e o bem-estar continua a crescer.',
      year: 2023,
      img: `/assets/Images/content/sobre-nos/linha-do-tempo-2023.jpeg`,
      altImg:
        'Duas pessoas conversando em uma sala de atendimento. Um homem está de costas com camiseta marrom e na sua frente uma mulher de camiseta branca. A mulher está sorrindo e entregando uma pasta de documentos. Ao fundo aparecem o nome Compartilhe Saúde e a logomarca da empresa.',
    },
  ];

  public get shouldShowCarousel(): boolean {
    const MD_SIZE = 768;

    return window.innerWidth <= MD_SIZE;
  }
}
