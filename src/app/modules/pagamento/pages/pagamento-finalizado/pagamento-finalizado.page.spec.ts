import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoFinalizadoPage } from './pagamento-finalizado.page';

describe('PagamentoFinalizadoPage', () => {
  let component: PagamentoFinalizadoPage;
  let fixture: ComponentFixture<PagamentoFinalizadoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoFinalizadoPage]
    });
    fixture = TestBed.createComponent(PagamentoFinalizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
