import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabelaPrecosProdutoComponent } from './form-tabela-precos-produto.component';
import { MessageService } from 'primeng/api';

describe('FormTabelaPrecosProdutoComponent', () => {
  let component: FormTabelaPrecosProdutoComponent;
  let fixture: ComponentFixture<FormTabelaPrecosProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormTabelaPrecosProdutoComponent]
    });
    fixture = TestBed.createComponent(FormTabelaPrecosProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
