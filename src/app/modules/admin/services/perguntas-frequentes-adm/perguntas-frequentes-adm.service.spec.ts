import { TestBed } from '@angular/core/testing';

import { PerguntasFrequentesAdmService } from './perguntas-frequentes-adm.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerguntasFrequentesAdmService', () => {
  let service: PerguntasFrequentesAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PerguntasFrequentesAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
