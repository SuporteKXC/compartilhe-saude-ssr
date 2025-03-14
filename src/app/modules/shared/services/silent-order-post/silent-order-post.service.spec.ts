import { TestBed } from '@angular/core/testing';

import { SilentOrderPostService } from './silent-order-post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SilentOrderPostService', () => {
  let service: SilentOrderPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SilentOrderPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
