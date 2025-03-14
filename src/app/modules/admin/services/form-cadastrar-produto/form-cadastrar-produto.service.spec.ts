import { TestBed } from '@angular/core/testing';

import { FormCadastrarProdutoService } from './form-cadastrar-produto.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarProdutoService', () => {
  let service: FormCadastrarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
