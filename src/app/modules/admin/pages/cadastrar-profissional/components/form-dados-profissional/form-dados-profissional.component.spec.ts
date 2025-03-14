import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosProfissionalComponent } from './form-dados-profissional.component';
import { MessageService } from 'primeng/api';

describe('FormDadosProfissionalComponent', () => {
  let component: FormDadosProfissionalComponent;
  let fixture: ComponentFixture<FormDadosProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormDadosProfissionalComponent]
    });
    fixture = TestBed.createComponent(FormDadosProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
