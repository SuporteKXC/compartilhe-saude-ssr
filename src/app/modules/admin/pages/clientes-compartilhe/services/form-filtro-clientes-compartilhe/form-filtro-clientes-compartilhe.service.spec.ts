import { TestBed } from '@angular/core/testing';

import { FormFiltroClientesCompartilheService } from './form-filtro-clientes-compartilhe.service';

describe('FormFiltroClientesCompartilheService', () => {
  let service: FormFiltroClientesCompartilheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFiltroClientesCompartilheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
