import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/modules/shared/models/pedido/pedido.model';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss'],
})
export class CardPedidoComponent {
  @Input()
  data!: Pedido;

  public StatusPedido = StatusPedido;

  constructor(private router: Router) {}

  navigateToDetalhes(id: number) {
    this.router.navigate(['dashboard', 'meus-pedidos', 'detalhes-pedido', id]);
  }

  public navigateToQrCodePix(id: number) {
    this.router.navigate(['/', 'pagamento', 'aguardando-pagamento', id]);
  }
}
