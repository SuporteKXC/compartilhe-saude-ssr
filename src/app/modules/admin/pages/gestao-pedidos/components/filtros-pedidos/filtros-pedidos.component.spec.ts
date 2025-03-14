import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosPedidosComponent } from './filtros-pedidos.component';

describe('FiltrosPedidosComponent', () => {
  let component: FiltrosPedidosComponent;
  let fixture: ComponentFixture<FiltrosPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosPedidosComponent]
    });
    fixture = TestBed.createComponent(FiltrosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
