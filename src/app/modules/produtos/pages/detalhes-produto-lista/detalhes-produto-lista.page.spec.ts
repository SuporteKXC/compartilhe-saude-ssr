import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdutoListaPage } from './detalhes-produto-lista.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConsultasExamesDetalhesComponent', () => {
  let component: DetalhesProdutoListaPage;
  let fixture: ComponentFixture<DetalhesProdutoListaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DetalhesProdutoListaPage]
    });
    fixture = TestBed.createComponent(DetalhesProdutoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
