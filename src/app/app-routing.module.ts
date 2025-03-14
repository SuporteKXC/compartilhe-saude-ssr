import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { UserGroup } from './modules/shared/enums/user-group';
import { AuthComponent } from './modules/usuarios/pages/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/content/content.module').then((m) => m.ContentModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard([UserGroup.ADMIN])],
    canActivateChild: [authGuard([UserGroup.ADMIN])],
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./modules/carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard([UserGroup.ADMIN, UserGroup.PACIENTE])],
    canActivateChild: [authGuard([UserGroup.ADMIN, UserGroup.PACIENTE])],
  },
  {
    path: 'pagamento',
    loadChildren: () =>
      import('./modules/pagamento/pagamento.module').then((m) => m.PagamentoModule),
    canActivate: [authGuard([UserGroup.ADMIN, UserGroup.PACIENTE])],
    canActivateChild: [authGuard([UserGroup.ADMIN, UserGroup.PACIENTE])],
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 100],
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
