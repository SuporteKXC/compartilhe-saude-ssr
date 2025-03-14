import { TestBed } from '@angular/core/testing';

import { ScriptLoaderService } from './script-loader.service';
import { DOCUMENT } from '@angular/common';

describe('ScriptLoaderService', () => {
  let service: ScriptLoaderService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [ScriptLoaderService],
    });

    TestBed.inject(DOCUMENT);
    service = TestBed.inject(ScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
