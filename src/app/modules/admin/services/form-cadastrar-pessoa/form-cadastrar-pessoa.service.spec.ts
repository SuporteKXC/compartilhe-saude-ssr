import { TestBed } from '@angular/core/testing';

import { FormCadastrarPessoaService } from './form-cadastrar-pessoa.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPessoaService', () => {
  let service: FormCadastrarPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
