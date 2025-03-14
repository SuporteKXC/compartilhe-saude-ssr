import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { DashboardComponent } from './dashboard.component';
import { MeuPerfilPage } from './pages/meu-perfil/meu-perfil.page';
import { MeusPedidosPage } from './pages/meus-pedidos/meus-pedidos.page';
import { DetalhesPedidoPage } from './pages/detalhes-pedido/detalhes-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardPage },
      {
        path: 'perfil',
        component: MeuPerfilPage,
        children: [{ path: 'dados-pessoais', component: DashboardPage }],
      },
      {
        path: 'meus-pedidos',
        component: MeusPedidosPage,
      },
      {
        path: 'meus-pedidos/detalhes-pedido/:id',
        component: DetalhesPedidoPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
