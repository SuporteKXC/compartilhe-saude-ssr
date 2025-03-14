import { TestBed } from '@angular/core/testing';

import { PreCadastroFormService } from './pre-cadastro-form.service';

describe('PreCadastroFormService', () => {
  let service: PreCadastroFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreCadastroFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
