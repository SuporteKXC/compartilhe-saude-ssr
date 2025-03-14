import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidoPage } from './detalhes-pedido.page';

describe('DetalhesPedidoPage', () => {
  let component: DetalhesPedidoPage;
  let fixture: ComponentFixture<DetalhesPedidoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesPedidoPage]
    });
    fixture = TestBed.createComponent(DetalhesPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
