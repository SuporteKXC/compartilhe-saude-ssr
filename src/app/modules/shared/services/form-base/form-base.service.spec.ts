import { TestBed } from '@angular/core/testing';

import { FormBaseService } from './form-base.service';
import { MessageService } from 'primeng/api';

describe('FormBaseService', () => {
  let service: FormBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
