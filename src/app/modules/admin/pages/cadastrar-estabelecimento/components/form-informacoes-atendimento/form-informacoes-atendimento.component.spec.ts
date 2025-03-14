import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformacoesAtendimentoComponent } from './form-informacoes-atendimento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormInformacoesAtendimentoComponent', () => {
  let component: FormInformacoesAtendimentoComponent;
  let fixture: ComponentFixture<FormInformacoesAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormInformacoesAtendimentoComponent]
    });
    fixture = TestBed.createComponent(FormInformacoesAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
