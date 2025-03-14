import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModalComponent } from './error-modal.component';
import { SharedModule } from '../../../shared.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent;
  let fixture: ComponentFixture<ErrorModalComponent>;

  const authServiceMock = {
    userHasGroup: jest.fn(),
    verifyToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ErrorModalComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
