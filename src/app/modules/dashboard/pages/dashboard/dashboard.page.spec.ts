import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard.page';
import { SecaoAtalhosComponent } from './components/secao-atalhos/secao-atalhos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { DialogService } from 'primeng/dynamicdialog';
import { CardIdVirtualComponent } from './components/card-id-virtual/card-id-virtual.component';
import { ButtonAtalhoComponent } from '../../components/button-atalho/button-atalho.component';
import { IconComponent } from 'src/app/modules/shared/components/icon/icon.component';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let oauthService: Partial<jest.Mocked<OAuthService>>;

  beforeEach(() => {
    oauthService = {
      getAccessToken: jest.fn()
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SkeletonModule, DialogModule],
      declarations: [
        DashboardPage, 
        SecaoAtalhosComponent,
        CardIdVirtualComponent,
        ButtonAtalhoComponent,
        IconComponent
      ],
      providers: [
        { provide: OAuthService, useValue: oauthService }, 
        {provide: DialogService}
      ]
    });
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
