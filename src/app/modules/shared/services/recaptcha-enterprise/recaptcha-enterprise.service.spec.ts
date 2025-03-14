import { TestBed } from '@angular/core/testing';

import { RecaptchaEnterpriseService } from './recaptcha-enterprise.service';

describe('RecaptchaEnterpriseService', () => {
  let service: RecaptchaEnterpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecaptchaEnterpriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
