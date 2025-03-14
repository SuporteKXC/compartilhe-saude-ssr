import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorListMessageComponent } from './error-list-message.component';
import { SharedModule } from '../../../shared.module';

describe('ErrorListMessageComponent', () => {
  let component: ErrorListMessageComponent;
  let fixture: ComponentFixture<ErrorListMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ErrorListMessageComponent],
    });
    fixture = TestBed.createComponent(ErrorListMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
