import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSituacaoComponent } from './form-situacao.component';

describe('FormSituacaoComponent', () => {
  let component: FormSituacaoComponent;
  let fixture: ComponentFixture<FormSituacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSituacaoComponent]
    });
    fixture = TestBed.createComponent(FormSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
