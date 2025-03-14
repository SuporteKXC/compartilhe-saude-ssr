import { TestBed } from '@angular/core/testing';

import { CidadeService } from './cidade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CidadeService', () => {
  let service: CidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
