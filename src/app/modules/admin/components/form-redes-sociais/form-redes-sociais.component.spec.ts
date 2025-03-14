import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRedesSociaisComponent } from './form-redes-sociais.component';

describe('FormRedesSociaisComponent', () => {
  let component: FormRedesSociaisComponent;
  let fixture: ComponentFixture<FormRedesSociaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRedesSociaisComponent]
    });
    fixture = TestBed.createComponent(FormRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
