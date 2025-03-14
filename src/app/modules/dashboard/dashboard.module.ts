import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { DashboardComponent } from './dashboard.component';
import { RodapeDashboardComponent } from './components/rodape-dashboard/rodape-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { SecaoAtalhosComponent } from './pages/dashboard/components/secao-atalhos/secao-atalhos.component';
import { ButtonAtalhoComponent } from './components/button-atalho/button-atalho.component';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { CardIdVirtualComponent } from './pages/dashboard/components/card-id-virtual/card-id-virtual.component';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { MeuPerfilPage } from './pages/meu-perfil/meu-perfil.page';
import { TabViewModule } from 'primeng/tabview';
import { FormDadosPessoaisComponent } from './pages/meu-perfil/components/form-dados-pessoais/form-dados-pessoais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormEnderecoComponent } from './pages/meu-perfil/components/form-endereco/form-endereco.component';
import { ToastModule } from 'primeng/toast';
import { MeusPedidosPage } from './pages/meus-pedidos/meus-pedidos.page';
import { DetalhesPedidoPage } from './pages/detalhes-pedido/detalhes-pedido.page';
import { CardPedidoComponent } from './pages/meus-pedidos/components/card-pedido/card-pedido.component';
import { SkeletonMeusPedidosComponent } from './pages/meus-pedidos/components/skeleton-meus-pedidos/skeleton-meus-pedidos.component';

@NgModule({
  declarations: [
    DashboardPage,
    DashboardComponent,
    RodapeDashboardComponent,
    SecaoAtalhosComponent,
    MeuPerfilPage,
    FormDadosPessoaisComponent,
    ButtonAtalhoComponent,
    CardIdVirtualComponent,
    FormEnderecoComponent,
    MeusPedidosPage,
    DetalhesPedidoPage,
    CardPedidoComponent,
    SkeletonMeusPedidosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    AccordionModule,
    DialogModule,
    SkeletonModule,
    AccordionModule,
    MenuModule,
    PanelModule,
    TabViewModule,
    ScrollPanelModule,
    ToastModule,
  ],
})
export class DashboardModule {}
