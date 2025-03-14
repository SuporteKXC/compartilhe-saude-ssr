import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENSAGEM_CHECKUP_ODONTOLOGICO } from 'src/app/modules/shared/constants/msg-whatsapp';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-checkup-odontologia',
  templateUrl: './checkup-odontologia.component.html',
  styleUrls: ['./checkup-odontologia.component.scss'],
})
export class CheckupOdontologiaComponent {
  constructor(private router: Router, private linkWhatsApp: LinkWhatsappService) {}

  getWhatsAppLink() {
    return this.linkWhatsApp.gerarLink( MENSAGEM_CHECKUP_ODONTOLOGICO);
  }
}
