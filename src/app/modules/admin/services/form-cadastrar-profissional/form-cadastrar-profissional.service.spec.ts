import { TestBed } from '@angular/core/testing';

import { FormCadastrarProfissionalService } from './form-cadastrar-profissional.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarProfissionalService', () => {
  let service: FormCadastrarProfissionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
    service = TestBed.inject(FormCadastrarProfissionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
