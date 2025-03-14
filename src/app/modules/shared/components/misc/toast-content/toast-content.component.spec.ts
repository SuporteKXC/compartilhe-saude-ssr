import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastContentComponent } from './toast-content.component';
import { MessageService } from 'primeng/api';

describe('ToastContentComponent', () => {
  let component: ToastContentComponent;
  let fixture: ComponentFixture<ToastContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [ToastContentComponent]
    });
    fixture = TestBed.createComponent(ToastContentComponent);
    component = fixture.componentInstance;
    component.message = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
