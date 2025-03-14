import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gestao-pedidos',
  templateUrl: './gestao-pedidos.page.html',
  styleUrls: ['./gestao-pedidos.page.scss'],
})
export class GestaoPedidosPage {
  public shouldSearchAgain$ = new Subject<void>();

  breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Gestão de Pedidos'
    }
  ];
}
