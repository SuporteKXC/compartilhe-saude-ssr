import { TestBed } from '@angular/core/testing';
import { HotjarService } from './hotjar.service';

jest.mock('@hotjar/browser');

describe('HotjarService', () => {
  let service: HotjarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotjarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
