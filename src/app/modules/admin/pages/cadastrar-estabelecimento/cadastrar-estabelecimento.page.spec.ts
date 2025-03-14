import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEstabelecimentoPage } from './cadastrar-estabelecimento.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';

describe('CadastrarEstabelecimentoPage', () => {
  let component: CadastrarEstabelecimentoPage;
  let fixture: ComponentFixture<CadastrarEstabelecimentoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CadastrarEstabelecimentoPage]
    });
    fixture = TestBed.createComponent(CadastrarEstabelecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
