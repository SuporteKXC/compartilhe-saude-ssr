import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPedidoComponent } from './card-pedido.component';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';

describe('CardPedidoComponent', () => {
  let component: CardPedidoComponent;
  let fixture: ComponentFixture<CardPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPedidoComponent]
    });
    fixture = TestBed.createComponent(CardPedidoComponent);
    component = fixture.componentInstance;

    component.data = { 
      id: 1302570706, 
      status: StatusPedido.PAGO, 
      dataHoraInclusao: '2024-02-21T15:23:58', 
      valorTotal: 300 
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
