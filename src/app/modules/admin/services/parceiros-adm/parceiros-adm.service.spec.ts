import { TestBed } from '@angular/core/testing';

import { ParceirosAdmService } from './parceiros-adm.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ParceiroAdmService', () => {
  let service: ParceirosAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ParceirosAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
