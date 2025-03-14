import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosAtendimentoComponent } from './form-dados-atendimento.component';
import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormDadosAtendimentoComponent', () => {
  let component: FormDadosAtendimentoComponent;
  let fixture: ComponentFixture<FormDadosAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule],
      declarations: [FormDadosAtendimentoComponent],
    });
    fixture = TestBed.createComponent(FormDadosAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
