import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacoesIdVirtual } from 'src/app/modules/dashboard/models/Informacoes-id-virtual.model';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard/dashboard.service';
import { MENSAGEM_INDIQUE_COMPARTILHE } from 'src/app/modules/shared/constants/msg-whatsapp';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-secao-atalhos',
  templateUrl: './secao-atalhos.component.html',
  styleUrls: ['./secao-atalhos.component.scss']
})
export class SecaoAtalhosComponent implements OnInit{
  $userData!: Observable<InformacoesIdVirtual>;
  isVisible = false;

  constructor(
    private dashboardService: DashboardService,
    private linkWhatsAppService: LinkWhatsappService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {}

  ngOnInit(): void {
    this.$userData = this.dashboardService.getIdVirtual();
  }

  toggleCard(): void {
    this.isVisible = !this.isVisible;
  }

  getShareLink(): string{
    if (isPlatformBrowser(this.plataformId)) {
      const message = `${MENSAGEM_INDIQUE_COMPARTILHE} ${window.location.origin}`;
  
      return this.linkWhatsAppService.shareLink(message);
    } 
    return '';
  }
}
