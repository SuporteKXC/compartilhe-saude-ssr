import { Component } from '@angular/core';
import { NavBarItem } from '../shared/models/navbar-items.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService],
})
export class DashboardComponent {
  items: NavBarItem[] = [
    {
      label: 'Home',
      path: '',
      icon: 'home',
    },
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Meu perfil',
      icon: 'account_circle',
      subRoutes: [
        {
          label: 'Dados pessoais',
          path: '/dashboard/perfil/dados-pessoais',
        },
      ],
    },
    {
      label: 'Meus pedidos',
      path: '/dashboard/meus-pedidos',
      icon: 'receipt_long',
      otherPatternsToMatch: [/\/dashboard\/meus-pedidos\/detalhes-pedido\/.*/],
    },
  ];
}
