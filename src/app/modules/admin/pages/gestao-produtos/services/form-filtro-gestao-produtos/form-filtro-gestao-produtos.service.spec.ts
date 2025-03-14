import { TestBed } from '@angular/core/testing';

import { FormFiltroGestaoProdutosService } from './form-filtro-gestao-produtos.service';

describe('FormFiltroGestaoProdutosService', () => {
  let service: FormFiltroGestaoProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFiltroGestaoProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
