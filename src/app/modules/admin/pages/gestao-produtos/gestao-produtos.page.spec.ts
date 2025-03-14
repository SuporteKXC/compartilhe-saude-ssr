import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProdutosPage } from './gestao-produtos.page';

describe('GestaoProdutosPage', () => {
  let component: GestaoProdutosPage;
  let fixture: ComponentFixture<GestaoProdutosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoProdutosPage]
    });
    fixture = TestBed.createComponent(GestaoProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
