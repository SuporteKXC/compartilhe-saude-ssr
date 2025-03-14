import { Component, Input, OnInit } from '@angular/core';
import { LinkWhatsappService } from '../../../services/link-whatsapp/link-whatsapp.service';
import { MENSAGEM_HOME } from '../../../constants/msg-whatsapp';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-button-whatsapp',
  templateUrl: './button-whatsapp.component.html',
  styleUrls: ['./button-whatsapp.component.scss'],
})
export class ButtonWhatsappComponent implements OnInit {
  @Input() message!: string;
  @Input() numeroSecundario!: string;

  messageLink!: string;
  pathImage = `${environment.imgUrl}`;

  constructor(private linkWhatstappService: LinkWhatsappService) {}

  ngOnInit(): void {
    this.messageLink = this.linkWhatstappService.gerarLink(
      this.message ? this.message : MENSAGEM_HOME,
      this.numeroSecundario
    );
  }
}
