import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() isConnectSaude!: boolean;

  constructor(private whatsappService: LinkWhatsappService) { }

  getLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }
}
