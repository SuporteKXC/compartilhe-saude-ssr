import { NavBarItem } from "src/app/modules/shared/models/navbar-items.model";

export const CONNECT_SAUDE_MENU_ITEMS: NavBarItem[] = [
  {
    label: 'Planos',
    path: '/planos-connect-saude',
    fragment: 'planos',
    datatestid: 'menu-item-planos',
  },
  {
    label: 'Perguntas Frequentes',
    path: '/planos-connect-saude',
    fragment: 'perguntas',
    datatestid: 'menu-item-perguntas',
  },
];
