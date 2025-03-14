import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidoComponent } from './detalhes-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetalhesPedidoComponent', () => {
  let component: DetalhesPedidoComponent;
  let fixture: ComponentFixture<DetalhesPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DetalhesPedidoComponent]
    });
    fixture = TestBed.createComponent(DetalhesPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
