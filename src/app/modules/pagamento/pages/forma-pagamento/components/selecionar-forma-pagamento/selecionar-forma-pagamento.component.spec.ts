import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarFormaPagamentoComponent } from './selecionar-forma-pagamento.component';

describe('SelecionarFormaPagamentoComponent', () => {
  let component: SelecionarFormaPagamentoComponent;
  let fixture: ComponentFixture<SelecionarFormaPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarFormaPagamentoComponent]
    });
    fixture = TestBed.createComponent(SelecionarFormaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
