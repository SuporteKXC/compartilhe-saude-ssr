import { TestBed } from '@angular/core/testing';

import { ParceirosService } from './parceiros.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ParceirosService', () => {
  let service: ParceirosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ParceirosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
