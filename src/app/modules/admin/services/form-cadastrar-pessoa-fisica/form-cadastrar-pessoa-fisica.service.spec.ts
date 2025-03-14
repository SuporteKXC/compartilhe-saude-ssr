import { TestBed } from '@angular/core/testing';

import { FormCadastrarPessoaFisicaService } from './form-cadastrar-pessoa-fisica.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPessoaFisicaService', () => {
  let service: FormCadastrarPessoaFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPessoaFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
