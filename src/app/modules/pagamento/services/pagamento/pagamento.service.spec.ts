import { TestBed } from '@angular/core/testing';

import { PagamentoService } from './pagamento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';

describe('PagamentoService', () => {
  let service: PagamentoService;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    service = TestBed.inject(PagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
