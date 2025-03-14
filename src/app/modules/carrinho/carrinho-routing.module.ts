import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { MeuCarrinhoPage } from './pages/meu-carrinho/meu-carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoComponent,
    children: [
      { path: '', component: MeuCarrinhoPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
