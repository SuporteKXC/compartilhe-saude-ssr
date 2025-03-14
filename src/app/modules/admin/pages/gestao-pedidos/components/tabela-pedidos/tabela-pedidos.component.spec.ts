import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPedidosComponent } from './tabela-pedidos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Subject } from 'rxjs';

describe('TabelaPedidosComponent', () => {
  let component: TabelaPedidosComponent;
  let fixture: ComponentFixture<TabelaPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaPedidosComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(TabelaPedidosComponent);
    component = fixture.componentInstance;

    component.shouldSearchAgain$ = new Subject();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
