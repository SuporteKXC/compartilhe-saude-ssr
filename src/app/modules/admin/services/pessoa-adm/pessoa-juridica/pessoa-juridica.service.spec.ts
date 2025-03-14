import { TestBed } from '@angular/core/testing';

import { PessoaJuridicaService } from './pessoa-juridica.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PessoaJuridicaService', () => {
  let service: PessoaJuridicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PessoaJuridicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
