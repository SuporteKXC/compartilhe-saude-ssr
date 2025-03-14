import { TestBed } from '@angular/core/testing';

import { FormCadastrarPerguntasFrequentesService } from './form-cadastrar-perguntas-frequentes.service';
import { MessageService } from 'primeng/api';

describe('FormCadastrarPerguntasFrequentesService', () => {
  let service: FormCadastrarPerguntasFrequentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.inject(FormCadastrarPerguntasFrequentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
