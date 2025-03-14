import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContentComponent } from './content.component';
import { SobreNosPage } from './pages/sobre-nos/sobre-nos.page';
import { NossosParceirosPage } from './pages/nossos-parceiros/nossos-parceiros.page';
import { DetalhesNossosParceirosPage } from './pages/detalhes-nossos-parceiros/detalhes-nossos-parceiros.page';
import { ConnectSaudePage } from './pages/connect-saude/connect-saude.page';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      {
        path: '',
        component: HomePage,
        title: 'Seja Compartilhe Saúde: sua plataforma completa de serviços de saúde',
        data: {
          metaDescription: 'Descubra a Compartilhe Saúde, plataforma que conecta você a uma rede de parceiros oferecendo consultas, exames, cirurgias, odonto e muito mais.',
        }
      },
      {
        path: 'sobre-nos',
        component: SobreNosPage,
        title: 'Rede de Parceiros Compartilhe: Qualidade e Confiança em Saúde',
        data: {
          metaDescription: 'Saiba mais sobre a Compartilhe Saúde, conheça nossa história e nossa missão de democratizar o acesso à saúde.',
        }
      },
      {
        path: 'nossos-parceiros/detalhes',
        title: 'Seja Compartilhe Saúde: Inovando o Acesso à Saúde com Qualidade',
        data: {
          metaDescription: 'Conheça a rede de parceiros da Compartilhe Saúde. Profissionais e clínicas de excelência em diversas especialidades, garantindo atendimento de qualidade.',
        },
        children: [
          {
            path: ':idParceiro/:nome',
            component: DetalhesNossosParceirosPage,
          },
        ]
      },
      {
        path: 'nossos-parceiros',
        component: NossosParceirosPage,
        title: 'Seja Compartilhe Saúde: Inovando o Acesso à Saúde com Qualidade',
        data: {
          metaDescription: 'Conheça a rede de parceiros da Compartilhe Saúde. Profissionais e clínicas de excelência em diversas especialidades, garantindo atendimento de qualidade.',
        },
        children: [
          {
            path: ':primeiroSegmento',
            component: NossosParceirosPage,
          },
          {
            path: ':primeiroSegmento/:segundoSegmento',
            component: NossosParceirosPage,
          },
          {
            path: ':primeiroSegmento/:segundoSegmento/:terceiroSegmento',
            component: NossosParceirosPage,
          },
        ]
      },
      {
        path: 'planos-connect-saude',
        component: ConnectSaudePage,
        title: 'Potencialize seu negócio digitalmente',
        data: {
          metaDescription: 'Escolha entre 4 planos do Connect Saúde e aumente a receita do seu negócio. Tenha uma loja online, agendamento, SEO e suporte via WhatsApp.',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
