import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLinksComponent } from './desktop-links.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuModule } from 'primeng/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DialogService } from 'primeng/dynamicdialog';

describe('LinksDesktopComponent', () => {
  let component: DesktopLinksComponent;
  let fixture: ComponentFixture<DesktopLinksComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn(),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MenuModule, HttpClientTestingModule, SharedModule],
      declarations: [DesktopLinksComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(DesktopLinksComponent);
    component = fixture.componentInstance;

    component.menuItems = [
      { label: 'Label', path: 'path' },
      { label: 'Label', subRoutes: [{ label: 'Label', path: 'path' }] },
      { label: 'Label', path: 'path' },
    ];

    component.userItems = [
      { label: 'Label', path: 'path' },
      { label: 'Label', path: 'path' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
