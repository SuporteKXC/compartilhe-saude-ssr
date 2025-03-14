import { Component } from '@angular/core';
import { MENSAGEM_HOME } from 'src/app/modules/shared/constants/msg-whatsapp';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-rodape-dashboard',
  templateUrl: './rodape-dashboard.component.html',
  styleUrls: ['./rodape-dashboard.component.scss']
})
export class RodapeDashboardComponent {
  constructor(private linkWhatsApp: LinkWhatsappService) {}

  getMessage() {
    return this.linkWhatsApp.gerarLink(MENSAGEM_HOME);
  }
}
