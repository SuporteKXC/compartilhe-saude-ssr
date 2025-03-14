import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValoresComponent } from './card-valores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { OAuthService } from 'angular-oauth2-oidc';

describe('CardValoresComponent', () => {
  let component: CardValoresComponent;
  let fixture: ComponentFixture<CardValoresComponent>;

  const oAuthServiceSpy = {
    hasValidAccessToken: jest.fn()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardValoresComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(CardValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
