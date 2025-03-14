import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacaoComponent } from './barra-de-navegacao.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { DesktopLinksComponent } from './components/desktop-links/desktop-links.component';
import { ContentModule } from 'src/app/modules/content/content.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('BarraDeNavegacaoComponent', () => {
  let component: BarraDeNavegacaoComponent;
  let fixture: ComponentFixture<BarraDeNavegacaoComponent>;

  const oAuthServiceSpy = {
    initImplicitFlow: jest.fn(),
    getIdentityClaims: jest.fn().mockReturnValue({ groups: [] }),
    hasValidAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        SidebarModule,
        ContentModule,
        AccordionModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
      declarations: [BarraDeNavegacaoComponent, SidebarComponent, DesktopLinksComponent],
      providers: [{ provide: OAuthService, useValue: oAuthServiceSpy }, { provide: DialogService }],
    });
    fixture = TestBed.createComponent(BarraDeNavegacaoComponent);
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
