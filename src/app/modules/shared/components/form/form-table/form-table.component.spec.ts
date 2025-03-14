import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTableComponent } from './form-table.component';

describe('FormTableComponent', () => {
  let component: FormTableComponent;
  let fixture: ComponentFixture<FormTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTableComponent]
    });
    fixture = TestBed.createComponent(FormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
