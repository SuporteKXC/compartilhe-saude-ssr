import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaFisicaPage } from './cadastrar-pessoa-fisica.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';

describe('CadastrarPessoaFisicaPage', () => {
  let component: CadastrarPessoaFisicaPage;
  let fixture: ComponentFixture<CadastrarPessoaFisicaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CadastrarPessoaFisicaPage]
    });
    fixture = TestBed.createComponent(CadastrarPessoaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
