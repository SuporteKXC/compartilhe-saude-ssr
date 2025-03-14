import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaJuridicaPage } from './cadastrar-pessoa-juridica.page';
import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CadastrarPessoaJuridicaPage', () => {
  let component: CadastrarPessoaJuridicaPage;
  let fixture: ComponentFixture<CadastrarPessoaJuridicaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MessageService],
      declarations: [CadastrarPessoaJuridicaPage]
    });
    fixture = TestBed.createComponent(CadastrarPessoaJuridicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
