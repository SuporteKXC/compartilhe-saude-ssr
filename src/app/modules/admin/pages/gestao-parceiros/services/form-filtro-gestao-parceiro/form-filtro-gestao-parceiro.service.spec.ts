import { TestBed } from '@angular/core/testing';

import { FormFiltroGestaoParceiroService } from './form-filtro-gestao-parceiro.service';

describe('FormFiltroGestaoParceiroService', () => {
  let service: FormFiltroGestaoParceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFiltroGestaoParceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
