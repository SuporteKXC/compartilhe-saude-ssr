import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreCadastroPage } from './pages/pre-cadastro/pre-cadastro.page';
import { BoasVindasPage } from './pages/boas-vindas/boas-vindas.page';

const routes: Routes = [
  { 
    path: "pre-cadastro", 
    component: PreCadastroPage,
    title: 'Seja Compartilhe Saúde: Seu Primeiro Passo para uma Vida Mais Saudável',
    data: {
      metaDescription: 'Dê o primeiro passo para uma vida mais saudável. Faça seu cadastro na Compartilhe Saúde, simplifique sua vida e descubra o que é saúde acessível de verdade.'
    }
  },
  { path: "boas-vindas", component: BoasVindasPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
