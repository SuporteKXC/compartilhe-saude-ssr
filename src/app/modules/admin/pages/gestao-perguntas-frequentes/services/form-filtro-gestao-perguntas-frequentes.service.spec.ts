import { TestBed } from '@angular/core/testing';

import { FormFiltroGestaoPerguntasFrequentesService } from './form-filtro-gestao-perguntas-frequentes.service';

describe('FormFiltroGestaoPerguntasFrequentesService', () => {
  let service: FormFiltroGestaoPerguntasFrequentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFiltroGestaoPerguntasFrequentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
