import { NavBarItem } from "src/app/modules/shared/models/navbar-items.model";

export const CONTENT_MENU_ITEMS: NavBarItem[] = [
  {
    label: 'Home',
    path: '/',
    datatestid: 'menu-item-home',
  },
  {
    label: 'Rede Compartilhe',
    path: '/nossos-parceiros',
    datatestid: 'menu-item-rede-compartilhe',
  },
  {
    label: 'Produtos',
    datatestid: 'menu-item-produtos',
    subRoutes: [
      {
        label: 'Check-ups',
        path: '/checkups',
        datatestid: 'menu-item-pacotes-checkup',
      },
      {
        label: 'Consultas',
        path: '/consultas',
      },
      {
        label: 'Exames',
        path: '/exames',
      },
      {
        label: 'Procedimentos',
        path: '/procedimentos',
      },
      {
        label: 'Cirurgias',
        path: '/cirurgias',
      },
      {
        label: 'Odontologia',
        path: '/odontologia',
        datatestid: 'menu-item-odontologia',
      },
    ],
  },
  {
    label: 'Sobre nós',
    path: '/sobre-nos',
    datatestid: 'menu-item-sobre-nos',
  },
];