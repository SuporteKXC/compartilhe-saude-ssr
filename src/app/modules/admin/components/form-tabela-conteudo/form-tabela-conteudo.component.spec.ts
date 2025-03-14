import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabelaConteudoComponent } from './form-tabela-conteudo.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

describe('FormTabelaConteudoComponent', () => {
  let component: FormTabelaConteudoComponent;
  let fixture: ComponentFixture<FormTabelaConteudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, DialogService],
      declarations: [FormTabelaConteudoComponent]
    });
    fixture = TestBed.createComponent(FormTabelaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
