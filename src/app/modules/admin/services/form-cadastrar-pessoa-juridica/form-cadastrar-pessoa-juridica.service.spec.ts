import { TestBed } from '@angular/core/testing';

import { FormCadastrarPessoaJuridicaService } from './form-cadastrar-pessoa-juridica.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPessoaJuridicaService', () => {
  let service: FormCadastrarPessoaJuridicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPessoaJuridicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
