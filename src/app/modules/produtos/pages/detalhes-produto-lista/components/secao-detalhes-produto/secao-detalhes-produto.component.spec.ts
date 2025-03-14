import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDetalhesProdutoComponent } from './secao-detalhes-produto.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { OAuthService } from 'angular-oauth2-oidc';

describe('SecaoDetalhesConsultasEExamesComponent', () => {
  let component: SecaoDetalhesProdutoComponent;
  let fixture: ComponentFixture<SecaoDetalhesProdutoComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SecaoDetalhesProdutoComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(SecaoDetalhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
