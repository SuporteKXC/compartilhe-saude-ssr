import { NavBarItem } from "src/app/modules/shared/models/navbar-items.model";

export const USER_MENU_ITEMS: NavBarItem[] = [
  {
    label: 'Meu Perfil',
    path: '/dashboard/perfil/dados-pessoais',
    datatestid: 'menu-item-meu-perfil',
  },
  {
    label: 'Meu Dashboard',
    path: '/dashboard',
    datatestid: 'menu-item-meu-dashboard',
  },
];