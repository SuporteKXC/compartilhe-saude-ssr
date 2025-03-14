import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPanelOptionCartaoCreditoComponent } from './radio-panel-option-cartao-credito.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { CurrencyPipe } from '@angular/common';

describe('RadioPanelOptionCartaoCreditoComponent', () => {
  let component: RadioPanelOptionCartaoCreditoComponent;
  let fixture: ComponentFixture<RadioPanelOptionCartaoCreditoComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RadioPanelOptionCartaoCreditoComponent],
      providers: [
        { provide: OAuthService, useValue: oAuthServiceSpy },
        DialogService,
        CurrencyPipe,
      ],
    });
    fixture = TestBed.createComponent(RadioPanelOptionCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
