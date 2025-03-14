import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PreCadastroPage } from './pages/pre-cadastro/pre-cadastro.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BoasVindasPage } from './pages/boas-vindas/boas-vindas.page';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';
import { FormularioSenhaComponent } from './components/formulario-senha/formulario-senha.component';
import { AvisoRecaptchaComponent } from './components/aviso-recaptcha/aviso-recaptcha.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    PreCadastroPage, 
    BoasVindasPage, 
    FormularioUsuariosComponent, 
    FormularioSenhaComponent, 
    AvisoRecaptchaComponent, 
    AuthComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    UsuariosRoutingModule, 
    SharedModule
  ],
})
export class UsuariosModule {}
