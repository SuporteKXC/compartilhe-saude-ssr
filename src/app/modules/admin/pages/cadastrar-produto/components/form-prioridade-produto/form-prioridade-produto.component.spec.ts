import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrioridadeProdutoComponent } from './form-prioridade-produto.component';
import { MessageService } from 'primeng/api';

describe('FormPrioridadeProdutoComponent', () => {
  let component: FormPrioridadeProdutoComponent;
  let fixture: ComponentFixture<FormPrioridadeProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [FormPrioridadeProdutoComponent]
    });
    fixture = TestBed.createComponent(FormPrioridadeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
