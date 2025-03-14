import { TestBed } from '@angular/core/testing';

import { FormCadastrarPerguntasService } from './form-cadastrar-perguntas.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPerguntasFrequentesService', () => {
  let service: FormCadastrarPerguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPerguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
