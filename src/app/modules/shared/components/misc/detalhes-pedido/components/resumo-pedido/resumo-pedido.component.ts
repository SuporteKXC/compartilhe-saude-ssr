import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';
import { UserGroup } from 'src/app/modules/shared/enums/user-group';
import { DetalhesPedido } from 'src/app/modules/shared/models/pedido/detalhes-pedido.model';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';

@Component({
  selector: 'app-resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.scss']
})
export class ResumoPedidoComponent {
  @Input() data!: DetalhesPedido;

  protected StatusPedido = StatusPedido;

  constructor(
    private authService: AuthService,
    private router: Router,
    private whatsAppService: LinkWhatsappService
  ) { }

  isAdmin() {
    const hasGroupAdmin = this.authService.userHasGroup(UserGroup.ADMIN);
    const hasPathAdmin = this.router.url.split('/').includes('admin');

    return hasGroupAdmin && hasPathAdmin;
  }

  getLink() {
    const message = `Olá, gostaria de realizar os agendamento do meu pedido Nº ${this.data.id}, 
    realizado pelo site da Compartilhe Saúde`;
    return this.whatsAppService.gerarLink(message);
  }
}
