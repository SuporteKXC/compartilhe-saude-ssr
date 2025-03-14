import { TestBed } from '@angular/core/testing';

import { ProdutosAdmService } from './produtos-adm.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutosService', () => {
  let service: ProdutosAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProdutosAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
