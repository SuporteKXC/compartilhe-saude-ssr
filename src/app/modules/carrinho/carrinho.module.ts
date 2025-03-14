import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MeuCarrinhoPage } from './pages/meu-carrinho/meu-carrinho.page';
import { CardItemCarrinhoComponent } from './pages/meu-carrinho/components/card-item-carrinho/card-item-carrinho.component';
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';
import { CardValoresComponent } from './pages/meu-carrinho/components/card-valores/card-valores.component';
import { SkeletonMeuCarrinhoComponent } from './pages/meu-carrinho/skeleton-meu-carrinho/skeleton-meu-carrinho.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    MeuCarrinhoPage,
    CardItemCarrinhoComponent,
    CardValoresComponent,
    SkeletonMeuCarrinhoComponent,
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    DividerModule,
    SkeletonModule,
  ],
})
export class CarrinhoModule {}
