import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { GestaoPedidosPage } from './pages/gestao-pedidos/gestao-pedidos.page';
import { DetalhesPedidoPage } from './pages/detalhes-pedido/detalhes-pedido.page';
import { GestaoParceirosPage } from './pages/gestao-parceiros/gestao-parceiros.page';
import { NovoParceiroPage } from './pages/novo-parceiro/novo-parceiro.page';
import { CadastrarEstabelecimentoPage } from './pages/cadastrar-estabelecimento/cadastrar-estabelecimento.page';
import { CadastrarProfissionalPage } from './pages/cadastrar-profissional/cadastrar-profissional.page';
import { GestaoProdutosPage } from './pages/gestao-produtos/gestao-produtos.page';
import { NovoProdutoPage } from './pages/novo-produto/novo-produto.page';
import { CadastrarProdutoPage } from './pages/cadastrar-produto/cadastrar-produto.page';
import { CadastrarPessoaFisicaPage } from './pages/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.page';
import { ClientesCompartilhePage } from './pages/clientes-compartilhe/clientes-compartilhe.page';
import { CadastrarPessoaJuridicaPage } from './pages/cadastrar-pessoa-juridica/cadastrar-pessoa-juridica.page';
import { unsavedChangesGuard } from 'src/app/core/guards/unsaved-changes/unsaved-changes.guard';
import { CadastrarPerguntasFrequentesPage } from './pages/cadastrar-perguntas-frequentes/cadastrar-perguntas-frequentes.page';
import { GestaoPerguntasFrequentesComponent } from './pages/gestao-perguntas-frequentes/gestao-perguntas-frequentes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardPage },

      { path: 'dashboard/gestao-pedidos', component: GestaoPedidosPage },
      { path: 'dashboard/gestao-pedidos/detalhes-pedido/:id', component: DetalhesPedidoPage },

      { path: 'dashboard/rede-compartilhe', component: GestaoParceirosPage },
      {
        path: 'dashboard/rede-compartilhe/cadastrar',
        component: NovoParceiroPage
      },
      {
        path: 'dashboard/rede-compartilhe/cadastrar/estabelecimento',
        component: CadastrarEstabelecimentoPage,
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'dashboard/rede-compartilhe/cadastrar/profissional',
        component: CadastrarProfissionalPage,
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'dashboard/rede-compartilhe/:id/estabelecimento/editar',
        component: CadastrarEstabelecimentoPage,
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'dashboard/rede-compartilhe/:id/profissional/editar',
        component: CadastrarProfissionalPage,
        canDeactivate: [unsavedChangesGuard]
      },

      { 
        path: 'dashboard/produtos-compartilhe',
        children: [
          { 
            path: '',
            component: GestaoProdutosPage
          },
          { 
            path: 'cadastrar',
            component: NovoProdutoPage
          },
          { 
            path: 'cadastrar/:categoria',
            component: CadastrarProdutoPage,
            canDeactivate: [unsavedChangesGuard]
          },
          { 
            path: ':id/:categoria/editar',
            component: CadastrarProdutoPage,
            canDeactivate: [unsavedChangesGuard]
          },
        ]
      },
      // { path: 'dashboard/produtos-compartilhe', component: GestaoProdutosPage },
      // { path: 'dashboard/produtos-compartilhe/cadastrar', component: NovoProdutoPage },
      // { path: 'dashboard/produtos-compartilhe/cadastrar/:categoria', component: CadastrarProdutoPage },
      // { path: 'dashboard/produtos-compartilhe/:id/:categoria/editar', component: CadastrarProdutoPage },

      { path: 'dashboard/clientes-compartilhe', component: ClientesCompartilhePage },
      {
        path: 'dashboard/clientes-compartilhe/cadastrar/pessoa-fisica',
        component: CadastrarPessoaFisicaPage,
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'dashboard/clientes-compartilhe/:id/pessoa-fisica/editar',
        component: CadastrarPessoaFisicaPage,
        canDeactivate: [unsavedChangesGuard]
      },

      {
        path: 'dashboard/clientes-compartilhe/cadastrar/pessoa-juridica',
        component: CadastrarPessoaJuridicaPage,
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'dashboard/clientes-compartilhe/:id/pessoa-juridica/editar',
        component: CadastrarPessoaJuridicaPage,
        canDeactivate: [unsavedChangesGuard]
      },

      {
        path: 'dashboard/perguntas-frequentes',
        children: [
          {
            path: '',
            component: GestaoPerguntasFrequentesComponent,
          },
          {
            path: 'cadastrar',
            component: CadastrarPerguntasFrequentesPage,
            canDeactivate: [unsavedChangesGuard]
          },
          {
            path: ':id/editar',
            component: CadastrarPerguntasFrequentesPage,
            canDeactivate: [unsavedChangesGuard]
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
