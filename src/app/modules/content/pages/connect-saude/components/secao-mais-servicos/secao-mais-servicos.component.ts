import { LinkWhatsappService } from './../../../../../shared/services/link-whatsapp/link-whatsapp.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secao-mais-servicos',
  templateUrl: './secao-mais-servicos.component.html',
  styleUrls: ['./secao-mais-servicos.component.scss']
})
export class SecaoMaisServicosComponent {

  constructor(private whatsappService: LinkWhatsappService) { }

  getWhatsAppLink() {
    const mensagem = "Olá, gostaria de mais informações sobre os serviços de marketing da Compartilhe Saúde. ";
    return this.whatsappService.gerarLink(mensagem, '27997513968');
  }
}
