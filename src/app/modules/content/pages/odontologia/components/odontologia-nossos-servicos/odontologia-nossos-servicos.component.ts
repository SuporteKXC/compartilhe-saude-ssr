import { Component } from '@angular/core';
import { CardNossosProdutos } from 'src/app/modules/content/models/card-nossos-produtos.model';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-nossos-servicos',
  templateUrl: './odontologia-nossos-servicos.component.html',
  styleUrls: ['./odontologia-nossos-servicos.component.scss']
})
export class OdontologiaNossosServicosComponent {
  constructor(private linkWhatsappService: LinkWhatsappService) {}

  public produtos: CardNossosProdutos[] = [
    {
      imgName: 'ferramentas',
      titulo: 'Clínico geral',
      texto:
        'O clínico geral vê o paciente como um todo de forma global, por isso se interessa por sua saúde geral, pois muitas doenças do corpo tem manifestações bucais.',
    },
    {
      imgName: 'implantes',
      titulo: 'Implantes',
      texto:
        'Os implantes dentários são dedicados a quem usa dentadura, ponte móvel ou tenha perdido um ou mais dentes. Seu objetivo é substituir as raízes dentárias, mantendo a mesma semelhança estética em relação aos dentes.',
    },
    {
      imgName: 'proteses',
      titulo: 'Próteses',
      texto:
        'As próteses dentárias são aparelhos utilizados para substituir os dentes ausentes, podendo ser fixos ou removíveis, cujo objetivo é restabelecer a harmonia facial, função e estética bucal.',
    },
    {
      imgName: 'ortodontia',
      titulo: 'Ortodontia',
      texto:
        'Especialidade que corrige a posição dos dentes e ossos maxilares posicionados de forma inadequada. Dentes tortos ou que não se encaixam corretamente.',
    },
    {
      imgName: 'dentistry',
      titulo: 'Estética dentária',
      texto:
        'A estética dental une uma série de cuidados com os dentes, que são responsáveis pela beleza de um sorriso, não sendo apenas uma questão de vaidade e, sim, de saúde também, como tratamento e prevenção de tártaros, cáries etc.',
    },
  ];
}
