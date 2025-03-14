import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoAtalhosComponent } from './secao-atalhos.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonAtalhoComponent } from 'src/app/modules/dashboard/components/button-atalho/button-atalho.component';
import { CardIdVirtualComponent } from '../card-id-virtual/card-id-virtual.component';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { IconComponent } from 'src/app/modules/shared/components/icon/icon.component';

describe('SecaoAtalhosComponent', () => {
  let component: SecaoAtalhosComponent;
  let fixture: ComponentFixture<SecaoAtalhosComponent>;
  let oauthService: Partial<jest.Mocked<OAuthService>>;

  beforeEach(() => {
    oauthService = {
      getAccessToken: jest.fn()
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DialogModule, SkeletonModule],
      declarations: [
        SecaoAtalhosComponent,
        ButtonAtalhoComponent, 
        CardIdVirtualComponent, 
        IconComponent
      ],
      providers: [
        { provide: OAuthService, useValue: oauthService }, 
        { provide: DialogService }, { provide: DialogService }
      ],
    });
    fixture = TestBed.createComponent(SecaoAtalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
