import { TestBed } from '@angular/core/testing';

import { FormCadastrarEstabelecimentoService } from './form-cadastrar-estabelecimento.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarEstabelecimentoService', () => {
  let service: FormCadastrarEstabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
    service = TestBed.inject(FormCadastrarEstabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
