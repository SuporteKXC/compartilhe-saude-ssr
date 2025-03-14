import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreCadastroPage } from './pre-cadastro.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormularioUsuariosComponent } from '../../components/formulario-usuarios/formulario-usuarios.component';
import { FormularioSenhaComponent } from '../../components/formulario-senha/formulario-senha.component';
import { AvisoRecaptchaComponent } from '../../components/aviso-recaptcha/aviso-recaptcha.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';

describe('PreCadastroPage', () => {
  let component: PreCadastroPage;
  let fixture: ComponentFixture<PreCadastroPage>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [
        PreCadastroPage,
        FormularioUsuariosComponent,
        FormularioSenhaComponent,
        AvisoRecaptchaComponent,
      ],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, {provide: DialogService}],
    });
    fixture = TestBed.createComponent(PreCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
