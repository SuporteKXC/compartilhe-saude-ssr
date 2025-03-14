import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalidadeComponent } from './form-modalidade.component';

describe('FormModalidadeComponent', () => {
  let component: FormModalidadeComponent;
  let fixture: ComponentFixture<FormModalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModalidadeComponent]
    });
    fixture = TestBed.createComponent(FormModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
