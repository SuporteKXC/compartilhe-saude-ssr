import { Component } from '@angular/core';
import { VideoModalService } from 'src/app/modules/shared/components/modals/video-modal/services/video-modal/video-modal.service';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secao-destaque',
  templateUrl: './secao-destaque.component.html',
  styleUrls: ['./secao-destaque.component.scss']
})
export class SecaoDestaqueComponent {
  protected videoPath = environment.videoPath;

  constructor(private whatsappService: LinkWhatsappService, private videoModalService: VideoModalService) { }

  getLink() {
    const mensagem = 'Olá, gostaria de mais informações sobre a assinatura do connect saúde.';
    const numero = '5527997513968';
    return this.whatsappService.gerarLink(mensagem, numero);
  }

  openVideoModal() {
    const videoConfig = {
      url: this.videoPath,
      title: 'Como Funciona'
    };

    this.videoModalService.open(videoConfig);
  }
}
