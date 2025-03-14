import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSellerIdComponent } from './form-seller-id.component';

describe('FormSellerIdComponent', () => {
  let component: FormSellerIdComponent;
  let fixture: ComponentFixture<FormSellerIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSellerIdComponent]
    });
    fixture = TestBed.createComponent(FormSellerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
