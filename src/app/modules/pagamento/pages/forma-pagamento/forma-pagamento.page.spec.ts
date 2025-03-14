import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagamentoPage } from './forma-pagamento.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { OAuthService } from 'angular-oauth2-oidc';

describe('FormaPagamentoPage', () => {
  let component: FormaPagamentoPage;
  let fixture: ComponentFixture<FormaPagamentoPage>;

  const oAuthServiceSpy = {
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormaPagamentoPage],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(FormaPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
