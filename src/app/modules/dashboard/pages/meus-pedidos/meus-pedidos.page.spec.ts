import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPedidosPage } from './meus-pedidos.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MeusPedidosPage', () => {
  let component: MeusPedidosPage;
  let fixture: ComponentFixture<MeusPedidosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MeusPedidosPage]
    });
    fixture = TestBed.createComponent(MeusPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
