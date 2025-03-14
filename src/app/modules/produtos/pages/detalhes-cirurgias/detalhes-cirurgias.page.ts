import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-detalhes-cirurgias',
  templateUrl: './detalhes-cirurgias.page.html',
  styleUrls: ['./detalhes-cirurgias.page.scss']
})
export class DetalhesCirurgiasPage {

  constructor(
    private router: Router,
    private linkWhatsappService: LinkWhatsappService,
  ) { }

  navigateToCirurgias() {
    this.router.navigate(['cirurgias']);
  }

  getMensagem(produto: DetalhesProduto) {
    const MESSAGE = `Olá, gostaria de mais informações sobre a cirurgia ${produto.nome}.`;
    return this.linkWhatsappService.gerarLink(MESSAGE);
  }
}
