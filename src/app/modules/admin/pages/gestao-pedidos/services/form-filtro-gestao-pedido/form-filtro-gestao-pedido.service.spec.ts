import { TestBed } from '@angular/core/testing';

import { FormFiltroGestaoPedidoService } from './form-filtro-gestao-pedido.service';

describe('FormFiltroGestaoPedidoService', () => {
  let service: FormFiltroGestaoPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFiltroGestaoPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
