import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCarrinhoPage } from './meu-carrinho.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { OAuthService } from 'angular-oauth2-oidc';

describe('MeuCarrinhoPage', () => {
  let component: MeuCarrinhoPage;
  let fixture: ComponentFixture<MeuCarrinhoPage>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuCarrinhoPage],
      imports: [HttpClientTestingModule],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(MeuCarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
