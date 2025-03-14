import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPerguntasFrequentesPage } from './cadastrar-perguntas-frequentes.page';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CadastrarPerguntasFrequentesPage', () => {
  let component: CadastrarPerguntasFrequentesPage;
  let fixture: ComponentFixture<CadastrarPerguntasFrequentesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MessageService],
      declarations: [CadastrarPerguntasFrequentesPage]
    });
    fixture = TestBed.createComponent(CadastrarPerguntasFrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
