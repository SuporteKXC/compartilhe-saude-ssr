import { TestBed } from '@angular/core/testing';

import { PessoaFisicaService } from './pessoa-fisica.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PessoaFisicaService', () => {
  let service: PessoaFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PessoaFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
