import { TestBed } from '@angular/core/testing';

import { FormCadastrarParceiroService } from './form-cadastrar-parceiro.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarParceiroService', () => {
  let service: FormCadastrarParceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
    service = TestBed.inject(FormCadastrarParceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
