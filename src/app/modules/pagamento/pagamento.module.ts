import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagamentoComponent } from './pagamento.component';
import { FormaPagamentoPage } from './pages/forma-pagamento/forma-pagamento.page';
import { SelecionarFormaPagamentoComponent } from './pages/forma-pagamento/components/selecionar-forma-pagamento/selecionar-forma-pagamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioPanelOptionPixComponent } from './pages/forma-pagamento/components/selecionar-forma-pagamento/components/radio-panel-option-pix/radio-panel-option-pix.component';
import { RadioPanelOptionCartaoCreditoComponent } from './pages/forma-pagamento/components/selecionar-forma-pagamento/components/radio-panel-option-cartao-credito/radio-panel-option-cartao-credito.component';
import { CardResumoCompraComponent } from './pages/forma-pagamento/components/card-resumo-compra/card-resumo-compra.component';
import { TotalComponent } from './pages/forma-pagamento/components/total/total.component';
import { PagamentoFinalizadoPage } from './pages/pagamento-finalizado/pagamento-finalizado.page';
import { BadgePagamentoSeguroComponent } from './pages/forma-pagamento/components/badge-pagamento-seguro/badge-pagamento-seguro.component';
import { AguardandoPagamentoPixPage } from './pages/aguardando-pagamento-pix/aguardando-pagamento-pix.page';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonTelaPixComponent } from './pages/aguardando-pagamento-pix/components/skeleton-tela-pix/skeleton-tela-pix.component';
import { SkeletonResumoCompraComponent } from './pages/forma-pagamento/components/skeleton-resumo-compra/skeleton-resumo-compra.component';

@NgModule({
  declarations: [
    PagamentoComponent,
    FormaPagamentoPage,
    SelecionarFormaPagamentoComponent,
    RadioPanelOptionPixComponent,
    RadioPanelOptionCartaoCreditoComponent,
    CardResumoCompraComponent,
    TotalComponent,
    PagamentoFinalizadoPage,
    BadgePagamentoSeguroComponent,
    AguardandoPagamentoPixPage,
    QrCodeComponent,
    SkeletonTelaPixComponent,
    SkeletonResumoCompraComponent,
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QRCodeModule,
    ToastModule,
    SkeletonModule,
  ],
  providers: [CurrencyPipe, MessageService],
})
export class PagamentoModule {}
