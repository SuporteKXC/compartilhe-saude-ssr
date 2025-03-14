import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from '../shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';

import { ContentComponent } from './content.component';

import { HomePage } from './pages/home/home.page';
import { BigNumbersComponent } from './pages/home/components/big-numbers/big-numbers.component';
import { ChamadaPrincipalComponent } from './pages/home/components/chamada-principal/chamada-principal.component';
import { ConsultoraComponent } from './pages/home/components/consultora/consultora.component';
import { DepoimentosComponent } from './pages/home/components/depoimentos/depoimentos.component';
import { CardDepoimentosComponent } from './components/card-depoimentos/card-depoimentos.component';
import { NossosProdutosComponent } from './pages/home/components/nossos-produtos/nossos-produtos.component';
import { CardNossosServicosComponent } from './components/card-nossos-produtos/card-nossos-produtos.component';
import { QuemSomosComponent } from './pages/home/components/quem-somos/quem-somos.component';
import { DestaqueProdutosComponent } from './pages/home/components/destaque-produtos/destaque-produtos.component';

import { NossosParceirosPage } from './pages/nossos-parceiros/nossos-parceiros.page';
import { SecaoNossosParceirosComponent } from './components/secao-nossos-parceiros/secao-nossos-parceiros.component';
import { CardNossosParceirosComponent } from './components/card-nossos-parceiros/card-nossos-parceiros.component';
import { SkeletonNossosParceirosComponent } from './components/skeleton-nossos-parceiros/skeleton-nossos-parceiros.component';

import { DetalhesNossosParceirosPage } from './pages/detalhes-nossos-parceiros/detalhes-nossos-parceiros.page';
import { SecaoDadosParceiroComponent } from './pages/detalhes-nossos-parceiros/components/secao-dados-parceiro/secao-dados-parceiro.component';
import { SecaoProdutosParceiroComponent } from './pages/detalhes-nossos-parceiros/components/secao-produtos-parceiro/secao-produtos-parceiro.component';

import { SobreNosPage } from './pages/sobre-nos/sobre-nos.page';
import { PropositoComponent } from './pages/sobre-nos/components/proposito/proposito.component';
import { NossaHistoriaComponent } from './pages/sobre-nos/components/nossa-historia/nossa-historia.component';
import { LinhaDoTempoComponent } from './pages/sobre-nos/components/linha-do-tempo/linha-do-tempo.component';
import { TimelineSectionComponent } from './pages/sobre-nos/components/linha-do-tempo/components/timeline-section/timeline-section.component';
import { TimelineCarouselComponent } from './pages/sobre-nos/components/linha-do-tempo/components/timeline-carousel/timeline-carousel.component';
import { AccordionFaqComponent } from './components/accordion-faq/accordion-faq.component';

import { OdontologiaPage } from './pages/odontologia/odontologia.page';
import { OdontologiaNossosServicosComponent } from './pages/odontologia/components/odontologia-nossos-servicos/odontologia-nossos-servicos.component';
import { OdontologiaChamadaPrincipalComponent } from './pages/odontologia/components/odontologia-chamada-principal/odontologia-chamada-principal.component';
import { CheckupOdontologiaComponent } from './pages/odontologia/components/checkup-odontologia/checkup-odontologia.component';
import { OdontologiaDepoimentosComponent } from './pages/odontologia/components/odontologia-depoimentos/odontologia-depoimentos.component';
import { OdontologiaNossasUnidadesComponent } from './pages/odontologia/components/odontologia-nossas-unidades/odontologia-nossas-unidades.component';
import { TextoDinamicoComponent } from './pages/home/components/chamada-principal/components/texto-dinamico/texto-dinamico.component';
import { SecaoProdutosDestaqueComponent } from './pages/home/components/chamada-principal/components/secao-produtos-destaque/secao-produtos-destaque.component';
import { OverflowTooltipComponent } from './components/overflow-tooltip/overflow-tooltip.component';
import { JoinStringPipe } from '../shared/pipes/join-string.pipe';
import { SkeletonSecaoNossosParceirosComponent } from './pages/detalhes-nossos-parceiros/components/secao-dados-parceiro/components/skeleton-secao-nossos-parceiros/skeleton-secao-nossos-parceiros.component';
import { SecaoInformacaoParceirosComponent } from './pages/detalhes-nossos-parceiros/components/secao-informacao-parceiros/secao-informacao-parceiros.component';
import { SecaoParceirosDestaqueComponent } from './pages/nossos-parceiros/components/secao-parceiros-destaque/secao-parceiros-destaque.component';
import { ConnectSaudePage } from './pages/connect-saude/connect-saude.page';
import { SecaoPlanosPrecosComponent } from './pages/connect-saude/components/secao-planos-precos/secao-planos-precos.component';
import { SecaoDestaqueComponent } from './pages/connect-saude/components/secao-destaque/secao-destaque.component';
import { SecaoMaisServicosComponent } from './pages/connect-saude/components/secao-mais-servicos/secao-mais-servicos.component';
import { SecaoDestaqueBeneficiosComponent } from './pages/connect-saude/components/secao-destaque/secao-destaque-beneficios/secao-destaque-beneficios.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { ConnectSaudeComponent } from './pages/home/components/connect-saude/connect-saude.component';
import { MaskPipe } from '../shared/pipes/mask.pipe';

@NgModule({
  declarations: [
    ContentComponent,
    HomePage,
    BigNumbersComponent,
    ChamadaPrincipalComponent,
    ConsultoraComponent,
    DepoimentosComponent,
    CardDepoimentosComponent,
    NossosProdutosComponent,
    CardNossosServicosComponent,
    QuemSomosComponent,
    NossosParceirosPage,
    SecaoNossosParceirosComponent,
    SkeletonNossosParceirosComponent,
    DetalhesNossosParceirosPage,
    SecaoDadosParceiroComponent,
    CardNossosParceirosComponent,
    SecaoProdutosParceiroComponent,
    SobreNosPage,
    PropositoComponent,
    NossaHistoriaComponent,
    LinhaDoTempoComponent,
    TimelineSectionComponent,
    TimelineCarouselComponent,
    AccordionFaqComponent,
    OdontologiaPage,
    OdontologiaNossosServicosComponent,
    OdontologiaChamadaPrincipalComponent,
    CheckupOdontologiaComponent,
    OdontologiaDepoimentosComponent,
    OdontologiaNossasUnidadesComponent,
    TextoDinamicoComponent,
    SecaoProdutosDestaqueComponent,
    DestaqueProdutosComponent,
    OverflowTooltipComponent,
    SkeletonSecaoNossosParceirosComponent,
    SecaoInformacaoParceirosComponent,
    SecaoParceirosDestaqueComponent,
    ConnectSaudePage,
    SecaoPlanosPrecosComponent,
    SecaoDestaqueComponent,
    SecaoMaisServicosComponent,
    SecaoDestaqueBeneficiosComponent,
    DestaqueComponent,
    ConnectSaudeComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    SkeletonModule,
    AccordionModule,
    ReactiveFormsModule,
    DividerModule,
    NgOptimizedImage,
    OverlayPanelModule,
    AvatarModule,
    SelectButtonModule,
  ],
  providers: [JoinStringPipe, MaskPipe]
})
export class ContentModule {}
