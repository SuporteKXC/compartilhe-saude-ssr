import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesCheckupPage } from './pages/detalhes-checkup/detalhes-checkup.page';
import { ProdutosComponent } from './produtos.component';
import { CheckupsPage } from './pages/checkups/checkups.page';
import { ExamesPage } from './pages/exames/exames.page';
import { ConsultasPage } from './pages/consultas/consultas.page';
import { DetalhesProdutoListaPage } from './pages/detalhes-produto-lista/detalhes-produto-lista.page';
import { ProcedimentosPage } from './pages/procedimentos/procedimentos.page';
import { CirurgiasPage } from './pages/cirurgias/cirurgias.page';
import { DetalhesCirurgiasPage } from './pages/detalhes-cirurgias/detalhes-cirurgias.page';
import { OdontologiaPage } from './pages/odontologia/odontologia.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [
      {
        path: 'checkups',
        component: CheckupsPage,
        title: 'Check-ups Preventivos da Compartilhe: Sua Saúde em Dia',
        data: {
          metaDescription: 'Cuide da sua saúde com os check-ups preventivos da Compartilhe Saúde. Agende seus exames e consultas de rotina com facilidade.',
        },
      },
      {
        path: 'consultas',
        component: ConsultasPage,
        title: 'Conheça os Serviços da Compartilhe Saúde: Consultas, Exames e Mais',
        data: {
          metaDescription: 'Encontre consultas, exames e serviços de saúde com os parceiros da Compartilhe Saúde. Agende online com facilidade e cuide da sua saúde de forma completa.',
        }
      },
      {
        path: 'exames',
        component: ExamesPage,
        title: 'Conheça os Serviços da Compartilhe Saúde: Consultas, Exames e Mais',
        data: {
          metaDescription: 'Encontre consultas, exames e serviços de saúde com os parceiros da Compartilhe Saúde. Agende online com facilidade e cuide da sua saúde de forma completa.',
        }
      },
      {
        path: 'procedimentos',
        component: ProcedimentosPage,
        title: 'Procedimentos de saúde eficientes e acessíveis',
        data: {
          metaDescription: 'Com a Compartilhe Saúde, você tem acesso facilitado a procedimentos de saúde eficientes. Agende sua consulta hoje',
        }
      },

      {
        path: 'cirurgias',
        component: CirurgiasPage,
        title: 'Cirurgias acessíveis com a Rede Compartilhe Saúde.',
        data: {
          metaDescription: 'Nossa rede de profissionais oferece tratamentos de alta qualidade com valores acessíveis. Agende sua consulta hoje.',
        }
      },

      {
        path: 'odontologia',
        component: OdontologiaPage,
        title: 'Serviços de odontologia de qualidade.',
        data: {
          metaDescription: 'Com a Compartilhe Saúde, você tem acesso de qualidade aos serviços de odontologia. Agende sua avaliação hoje.',
        }
      },

      {
        path: 'checkups/detalhes/:id/:nome',
        component: DetalhesCheckupPage,
        title: 'Check-ups Preventivos da Compartilhe: Sua Saúde em Dia',
      },
      {
        path: 'cirurgias/detalhes/:id/:nome',
        component: DetalhesCirurgiasPage,
        title: 'Conheça os Serviços da Compartilhe Saúde: Consultas, Exames e Mais',
      },

      {
        path: ':categoria/detalhes/:id/:nome',
        component: DetalhesProdutoListaPage,
        title: 'Conheça os Serviços da Compartilhe Saúde: Consultas, Exames e Mais',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
