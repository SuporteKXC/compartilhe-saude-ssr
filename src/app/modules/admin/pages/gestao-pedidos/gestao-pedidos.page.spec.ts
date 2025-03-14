import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoPedidosPage } from './gestao-pedidos.page';

describe('GestaoPedidosPage', () => {
  let component: GestaoPedidosPage;
  let fixture: ComponentFixture<GestaoPedidosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoPedidosPage]
    });
    fixture = TestBed.createComponent(GestaoPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
