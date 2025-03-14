import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosEstabelecimentoComponent } from './form-dados-estabelecimento.component';
import { MessageService } from 'primeng/api';

describe('FormDadosEstabelecimentoComponent', () => {
  let component: FormDadosEstabelecimentoComponent;
  let fixture: ComponentFixture<FormDadosEstabelecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormDadosEstabelecimentoComponent]
    });
    fixture = TestBed.createComponent(FormDadosEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
