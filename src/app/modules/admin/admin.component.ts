import { Component } from '@angular/core';
import { NavBarItem } from '../shared/models/navbar-items.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  items: NavBarItem[] = [
    {
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Gestão de Pedidos',
      path: '/admin/dashboard/gestao-pedidos',
      icon: 'analytics',
      otherPatternsToMatch: [/\/admin\/dashboard\/gestao-pedidos\/.*/],
    },
    {
      label: 'Produtos Compartilhe',
      path: '/admin/dashboard/produtos-compartilhe',
      icon: 'shopping_bag',
      otherPatternsToMatch: [/\/admin\/dashboard\/produtos-compartilhe\/.*/],
    },
    {
      label: 'Rede Compartilhe',
      path: '/admin/dashboard/rede-compartilhe',
      icon: 'stethoscope',
      otherPatternsToMatch: [/\/admin\/dashboard\/rede-compartilhe\/.*/],
    },
    {
      label: 'Clientes Compartilhe',
      path: '/admin/dashboard/clientes-compartilhe',
      icon: 'groups',
      otherPatternsToMatch: [/\/admin\/dashboard\/clientes-compartilhe\/.*/],
    },
    {
      label: 'Perguntas Frequentes',
      path: '/admin/dashboard/perguntas-frequentes',
      icon: 'live_help',
      otherPatternsToMatch: [/\/admin\/dashboard\/perguntas-frequentes\/.*/],
    },
  ];
}
