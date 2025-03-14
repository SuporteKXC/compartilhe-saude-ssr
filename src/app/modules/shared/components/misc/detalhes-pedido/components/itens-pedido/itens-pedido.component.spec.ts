import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensPedidoComponent } from './itens-pedido.component';

describe('ItensPedidoComponent', () => {
  let component: ItensPedidoComponent;
  let fixture: ComponentFixture<ItensPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensPedidoComponent]
    });
    fixture = TestBed.createComponent(ItensPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
