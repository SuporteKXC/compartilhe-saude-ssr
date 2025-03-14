import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RodapeDashboardComponent } from './components/rodape-dashboard/rodape-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let authService: Partial<jest.Mocked<AuthService>>;

  beforeEach(() => {
    authService = {
      login: jest.fn(),
      getUserInfo: jest.fn(),
      verifyToken: jest.fn(),
      didLogout$: new Subject(),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, NoopAnimationsModule],
      declarations: [
        DashboardComponent,
        RodapeDashboardComponent,
      ],
      providers: [{ provide: AuthService, useValue: authService }],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
