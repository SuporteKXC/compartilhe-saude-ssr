import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentoComponent } from './pagamento.component';
import { FormaPagamentoPage } from './pages/forma-pagamento/forma-pagamento.page';
import { PagamentoFinalizadoPage } from './pages/pagamento-finalizado/pagamento-finalizado.page';
import { AguardandoPagamentoPixPage } from './pages/aguardando-pagamento-pix/aguardando-pagamento-pix.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoComponent,
    children: [
      { path: 'forma-pagamento', component: FormaPagamentoPage },
      { path: 'finalizado/:id', component: PagamentoFinalizadoPage },
      { path: 'aguardando-pagamento/:id', component: AguardandoPagamentoPixPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoRoutingModule {}
