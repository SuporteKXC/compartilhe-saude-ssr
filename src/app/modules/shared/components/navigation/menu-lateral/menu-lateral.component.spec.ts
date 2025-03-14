import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralComponent } from './menu-lateral.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LateralDesktopLinksComponent } from './components/lateral-desktop-links/lateral-desktop-links.component';
import { IconComponent } from 'src/app/modules/shared/components/icon/icon.component';
import { SidebarComponent } from 'src/app/modules/shared/components/navigation/sidebar/sidebar.component';
import { MobileLinksComponent } from 'src/app/modules/shared/components/navigation/mobile-links/mobile-links.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

describe('MenuLateralComponent', () => {
  let component: MenuLateralComponent;
  let fixture: ComponentFixture<MenuLateralComponent>;

  let authService: Partial<jest.Mocked<AuthService>>;

  beforeEach(() => {
    authService = {
      login: jest.fn(),
      getUserInfo: jest.fn(),
      verifyToken: jest.fn(),
      didLogout$: new Subject(),
    };

    TestBed.configureTestingModule({
      imports: [SharedModule, SidebarModule, RouterTestingModule],
      declarations: [
        MenuLateralComponent,
        LateralDesktopLinksComponent,
        MobileLinksComponent,
        IconComponent,
        SidebarComponent,
      ],
      providers: [{ provide: AuthService, useValue: authService }],
    });
    fixture = TestBed.createComponent(MenuLateralComponent);
    component = fixture.componentInstance;

    component.menuItems = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
