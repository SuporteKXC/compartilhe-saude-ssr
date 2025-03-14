import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosEmpresaComponent } from './form-dados-empresa.component';

describe('FormDadosEmpresaComponent', () => {
  let component: FormDadosEmpresaComponent;
  let fixture: ComponentFixture<FormDadosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDadosEmpresaComponent]
    });
    fixture = TestBed.createComponent(FormDadosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
