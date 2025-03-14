import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoginComponent } from './button-login.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';

describe('ButtonLoginComponent', () => {
  let component: ButtonLoginComponent;
  let fixture: ComponentFixture<ButtonLoginComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLoginComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(ButtonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
