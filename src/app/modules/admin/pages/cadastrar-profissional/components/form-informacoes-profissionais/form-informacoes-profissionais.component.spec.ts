import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformacoesProfissionaisComponent } from './form-informacoes-profissionais.component';

describe('FormInformacoesProfissionaisComponent', () => {
  let component: FormInformacoesProfissionaisComponent;
  let fixture: ComponentFixture<FormInformacoesProfissionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInformacoesProfissionaisComponent]
    });
    fixture = TestBed.createComponent(FormInformacoesProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
