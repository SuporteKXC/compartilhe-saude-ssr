import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProdutoPage } from './cadastrar-produto.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('CadastrarProdutoPage', () => {
  let component: CadastrarProdutoPage;
  let fixture: ComponentFixture<CadastrarProdutoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [CadastrarProdutoPage],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CadastrarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
