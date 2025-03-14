import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoProdutosParceiroComponent } from './secao-produtos-parceiro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecaoProdutosParceiroComponent', () => {
  let component: SecaoProdutosParceiroComponent;
  let fixture: ComponentFixture<SecaoProdutosParceiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SecaoProdutosParceiroComponent]
    });
    fixture = TestBed.createComponent(SecaoProdutosParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
