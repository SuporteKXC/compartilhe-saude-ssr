import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from './modules/shared/shared.module';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

jest.mock('@hotjar/browser');

describe('AppComponent', () => {
  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DialogModule, SharedModule, HttpClientTestingModule],
      declarations: [AppComponent],
        providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
