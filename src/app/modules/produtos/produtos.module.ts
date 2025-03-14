import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';

import { ProdutosComponent } from './produtos.component';

import { CheckupsPage } from './pages/checkups/checkups.page';
import { DetalhesCheckupPage } from '../produtos/pages/detalhes-checkup/detalhes-checkup.page';
import { FormOndeRealizarComponent } from './pages/detalhes-checkup/components/form-onde-realizar/form-onde-realizar.component';
import { DetalhesProdutoListaPage } from './pages/detalhes-produto-lista/detalhes-produto-lista.page';
import { SecaoDetalhesProdutoComponent } from './pages/detalhes-produto-lista/components/secao-detalhes-produto/secao-detalhes-produto.component';
import { TituloTooltipComponent } from './pages/detalhes-produto-lista/components/titulo-tooltip/titulo-tooltip.component';

import { SecaoDetalhesComponent } from './components/secao-detalhes/secao-detalhes.component';
import { SkeletonSecaoDetalhesComponent } from './components/skeleton-secao-detalhes/skeleton-secao-detalhes.component';
import { CardDetalhesProdutoComponent } from './components/card-detalhes-produto/card-detalhes-produto.component';
import { SkeletonCardDetalhesProdutoComponent } from './components/skeleton-card-detalhes-produto/skeleton-card-detalhes-produto.component';
import { SecaoInteresseComponent } from './components/secao-interesse/secao-interesse.component';
import { CardInteressesComponent } from './components/card-interesses/card-interesses.component';
import { SkeletonInteressesComponent } from './components/skeleton-interesses/skeleton-interesses.component';

import { SecaoProdutosComponent } from './components/secao-produtos/secao-produtos.component';
import { ExamesPage } from './pages/exames/exames.page';
import { ConsultasPage } from './pages/consultas/consultas.page';
import { ProcedimentosPage } from './pages/procedimentos/procedimentos.page';
import { CirurgiasPage } from './pages/cirurgias/cirurgias.page';
import { DetalhesCirurgiasPage } from './pages/detalhes-cirurgias/detalhes-cirurgias.page';
import { OdontologiaPage } from './pages/odontologia/odontologia.page';
import { SecaoPerguntasFrequentesComponent } from './components/secao-perguntas-frequentes/secao-perguntas-frequentes.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    CheckupsPage,
    DetalhesCheckupPage,
    DetalhesProdutoListaPage,
    CardDetalhesProdutoComponent,
    CardInteressesComponent,
    SecaoInteresseComponent,
    SkeletonInteressesComponent,
    FormOndeRealizarComponent,
    SecaoDetalhesComponent,
    SkeletonSecaoDetalhesComponent,
    SecaoDetalhesProdutoComponent,
    TituloTooltipComponent,
    SkeletonCardDetalhesProdutoComponent,
    SecaoProdutosComponent,
    ExamesPage,
    ConsultasPage,
    ProcedimentosPage,
    CirurgiasPage,
    DetalhesCirurgiasPage,
    OdontologiaPage,
    SecaoPerguntasFrequentesComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SkeletonModule,
    AvatarModule,
    DividerModule,
    AccordionModule,
  ]
})
export class ProdutosModule { }
