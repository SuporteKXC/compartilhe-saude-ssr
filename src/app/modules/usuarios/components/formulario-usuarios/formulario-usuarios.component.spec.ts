import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioUsuariosComponent } from './formulario-usuarios.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AvisoRecaptchaComponent } from '../aviso-recaptcha/aviso-recaptcha.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';

describe('FormularioUsuariosComponent', () => {
  let component: FormularioUsuariosComponent;
  let fixture: ComponentFixture<FormularioUsuariosComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [FormularioUsuariosComponent, AvisoRecaptchaComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(FormularioUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
