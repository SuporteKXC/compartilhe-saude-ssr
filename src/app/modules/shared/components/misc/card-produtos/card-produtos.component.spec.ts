import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CardProdutosComponent } from './card-produtos.component';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';

describe('CardProdutosComponent', () => {
  let component: CardProdutosComponent;
  let fixture: ComponentFixture<CardProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: []
    });
    fixture = TestBed.createComponent(CardProdutosComponent);
    component = fixture.componentInstance;

    component.data = {
      id: 0,
      nome: '',
      resumo: '',
      pathImagem: '',
      categoria: CategoriaProduto.CONSULTA,
      subcategoria: {
        id: 0,
        descricao: '',
        categoria: CategoriaProduto.CONSULTA
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
