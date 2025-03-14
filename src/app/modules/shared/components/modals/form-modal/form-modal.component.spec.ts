import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalComponent } from './form-modal.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('FormModalComponent', () => {
  let component: FormModalComponent;
  let fixture: ComponentFixture<FormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModalComponent]
    });
    fixture = TestBed.createComponent(FormModalComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup({
      index: new FormControl<number | null>(null)
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
