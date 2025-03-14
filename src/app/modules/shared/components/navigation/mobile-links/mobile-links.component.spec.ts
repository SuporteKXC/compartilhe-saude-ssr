import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLinksComponent } from './mobile-links.component';
import { AccordionModule } from 'primeng/accordion';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DialogService } from 'primeng/dynamicdialog';

describe('MobileLinksComponent', () => {
  let component: MobileLinksComponent;
  let fixture: ComponentFixture<MobileLinksComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        SharedModule,
      ],
      declarations: [MobileLinksComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(MobileLinksComponent);
    component = fixture.componentInstance;

    component.menuItems = [
      { label: 'Label', path: 'path' },
      { label: 'Label', subRoutes: [{ label: 'Label', path: 'path' }] },
      { label: 'Label', path: 'path' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
