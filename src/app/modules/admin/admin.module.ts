import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { GestaoPedidosPage } from './pages/gestao-pedidos/gestao-pedidos.page';
import { FiltrosPedidosComponent } from './pages/gestao-pedidos/components/filtros-pedidos/filtros-pedidos.component';
import { TabelaPedidosComponent } from './pages/gestao-pedidos/components/tabela-pedidos/tabela-pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { DetalhesPedidoPage } from './pages/detalhes-pedido/detalhes-pedido.page';
import { GestaoParceirosPage } from './pages/gestao-parceiros/gestao-parceiros.page';
import { FiltrosParceirosComponent } from './pages/gestao-parceiros/components/filtros-parceiros/filtros-parceiros.component';
import { TabelaParceirosComponent } from './pages/gestao-parceiros/components/tabela-parceiros/tabela-parceiros.component';
import { NovoParceiroPage } from './pages/novo-parceiro/novo-parceiro.page';
import { CadastrarEstabelecimentoPage } from './pages/cadastrar-estabelecimento/cadastrar-estabelecimento.page';
import { FormDadosEstabelecimentoComponent } from './pages/cadastrar-estabelecimento/components/form-dados-estabelecimento/form-dados-estabelecimento.component';
import { FormSituacaoComponent } from './components/form-situacao/form-situacao.component';
import { FormUnidadePropriaComponent } from './pages/cadastrar-estabelecimento/components/form-unidade-propria/form-unidade-propria.component';
import { FormEnderecoComponent } from './components/form-endereco/form-endereco.component';
import { FormServicosOferecidosComponent } from './components/form-servicos-oferecidos/form-servicos-oferecidos.component';
import { CadastrarProfissionalPage } from './pages/cadastrar-profissional/cadastrar-profissional.page';
import { FormDadosProfissionalComponent } from './pages/cadastrar-profissional/components/form-dados-profissional/form-dados-profissional.component';
import { FormEspecialidadeComponent } from './pages/cadastrar-profissional/components/form-especialidade/form-especialidade.component';
import { FormFormaAtendimentoComponent } from './pages/cadastrar-profissional/components/form-forma-atendimento/form-forma-atendimento.component';
import { FormLocalAtendimentoComponent } from './pages/cadastrar-profissional/components/form-local-atendimento/form-local-atendimento.component';
import { ToastModule } from 'primeng/toast';
import { GestaoProdutosPage } from './pages/gestao-produtos/gestao-produtos.page';
import { FiltrosProdutosComponent } from './pages/gestao-produtos/components/filtros-produtos/filtros-produtos.component';
import { TabelaProdutosComponent } from './pages/gestao-produtos/components/tabela-produtos/tabela-produtos.component';
import { NovoProdutoPage } from './pages/novo-produto/novo-produto.page';
import { CadastrarProdutoPage } from './pages/cadastrar-produto/cadastrar-produto.page';
import { FormPrioridadeProdutoComponent } from './pages/cadastrar-produto/components/form-prioridade-produto/form-prioridade-produto.component';
import { FormDadosProdutoComponent } from './pages/cadastrar-produto/components/form-dados-produto/form-dados-produto.component';
import { FormProdutosRelacionadosComponent } from './pages/cadastrar-produto/components/form-produtos-relacionados/form-produtos-relacionados.component';
import { FormTabelaPrecosProdutoComponent } from './pages/cadastrar-produto/components/form-tabela-precos-produto/form-tabela-precos-produto.component';
import { DialogModule } from 'primeng/dialog';
import { ModalAdicionarValoresComponent } from './pages/cadastrar-produto/components/modal-adicionar-valores/modal-adicionar-valores.component';
import { FormSellerIdComponent } from './components/form-seller-id/form-seller-id.component';
import { FormDestaqueComponent } from './components/form-destaque/form-destaque.component';
import { CadastrarPessoaFisicaPage } from './pages/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.page';
import { TabViewModule } from 'primeng/tabview';
import { FormModalidadeComponent } from './components/form-modalidade/form-modalidade.component';
import { FormMeusDadosComponent } from './pages/cadastrar-pessoa-fisica/components/form-meus-dados/form-meus-dados.component';
import { ClientesCompartilhePage } from './pages/clientes-compartilhe/clientes-compartilhe.page';
import { FiltroClientesCompartilheComponent } from './pages/clientes-compartilhe/components/filtro-clientes-compartilhe/filtro-clientes-compartilhe.component';
import { TabelaClientesCompartilheComponent } from './pages/clientes-compartilhe/components/tabela-clientes-compartilhe/tabela-clientes-compartilhe.component';
import { CadastrarPessoaJuridicaPage } from './pages/cadastrar-pessoa-juridica/cadastrar-pessoa-juridica.page';
import { FormDadosEmpresaComponent } from './pages/cadastrar-pessoa-juridica/components/form-dados-empresa/form-dados-empresa.component';
import { FormParceiroComponent } from './pages/cadastrar-estabelecimento/components/form-parceiro/form-parceiro.component';
import { FormRedesSociaisComponent } from './components/form-redes-sociais/form-redes-sociais.component';
import { FormInformacoesProfissionaisComponent } from './pages/cadastrar-profissional/components/form-informacoes-profissionais/form-informacoes-profissionais.component';
import { FormDadosBancariosComponent } from './components/form-dados-bancarios/form-dados-bancarios.component';
import { FormDadosAtendimentoComponent } from './pages/cadastrar-profissional/components/form-dados-atendimento/form-dados-atendimento.component';
import { FormInformacoesAtendimentoComponent } from './pages/cadastrar-estabelecimento/components/form-informacoes-atendimento/form-informacoes-atendimento.component';
import { CadastrarPerguntasFrequentesPage } from './pages/cadastrar-perguntas-frequentes/cadastrar-perguntas-frequentes.page';
import { CheckboxModule } from 'primeng/checkbox';
import { GestaoPerguntasFrequentesComponent } from './pages/gestao-perguntas-frequentes/gestao-perguntas-frequentes.component';
import { FiltroGestaoPerguntasFrequentesComponent } from './pages/gestao-perguntas-frequentes/components/filtro-gestao-perguntas-frequentes/filtro-gestao-perguntas-frequentes.component';
import { TabelaPerguntasComponent } from './pages/gestao-perguntas-frequentes/components/tabela-perguntas/tabela-perguntas.component';
import { AccordionModule } from 'primeng/accordion';
import { ModalAdicionarPerguntasFrequentesComponent } from './components/form-tabela-conteudo/components/modal-adicionar-perguntas-frequentes/modal-adicionar-perguntas-frequentes.component';
import { FormTabelaConteudoComponent } from './components/form-tabela-conteudo/form-tabela-conteudo.component';
import { FormConteudoComponent } from './pages/cadastrar-produto/components/form-conteudo/form-conteudo.component';
import { ModalPerguntasFrequentesComponent } from './pages/cadastrar-produto/components/form-conteudo/components/modal-perguntas-frequentes/modal-perguntas-frequentes.component';

@NgModule({
  declarations: [
    DashboardPage,
    AdminComponent,
    GestaoPedidosPage,
    FiltrosPedidosComponent,
    TabelaPedidosComponent,
    DetalhesPedidoPage,
    GestaoParceirosPage,
    FiltrosParceirosComponent,
    TabelaParceirosComponent,
    NovoParceiroPage,
    CadastrarEstabelecimentoPage,
    FormDadosEstabelecimentoComponent,
    FormSituacaoComponent,
    FormUnidadePropriaComponent,
    FormEnderecoComponent,
    FormServicosOferecidosComponent,
    CadastrarProfissionalPage,
    FormDadosProfissionalComponent,
    FormEspecialidadeComponent,
    FormFormaAtendimentoComponent,
    FormLocalAtendimentoComponent,
    GestaoProdutosPage,
    FiltrosProdutosComponent,
    TabelaProdutosComponent,
    NovoProdutoPage,
    CadastrarProdutoPage,
    FormPrioridadeProdutoComponent,
    FormDadosProdutoComponent,
    FormProdutosRelacionadosComponent,
    FormTabelaPrecosProdutoComponent,
    ModalAdicionarValoresComponent,
    FormSellerIdComponent,
    FormDestaqueComponent,
    CadastrarPessoaFisicaPage,
    FormModalidadeComponent,
    FormMeusDadosComponent,
    ClientesCompartilhePage,
    FiltroClientesCompartilheComponent,
    TabelaClientesCompartilheComponent,
    CadastrarPessoaJuridicaPage,
    FormDadosEmpresaComponent,
    FormParceiroComponent,
    FormDadosAtendimentoComponent,
    FormRedesSociaisComponent,
    FormInformacoesProfissionaisComponent,
    FormDadosBancariosComponent,
    FormInformacoesAtendimentoComponent,
    CadastrarPerguntasFrequentesPage,
    GestaoPerguntasFrequentesComponent,
    FiltroGestaoPerguntasFrequentesComponent,
    TabelaPerguntasComponent,
    ModalAdicionarPerguntasFrequentesComponent,
    FormTabelaConteudoComponent,
    FormConteudoComponent,
    ModalPerguntasFrequentesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    SkeletonModule,
    ReactiveFormsModule,
    ToastModule,
    DialogModule,
    TabViewModule,
    CheckboxModule,
    AccordionModule,
  ],
})
export class AdminModule {}
