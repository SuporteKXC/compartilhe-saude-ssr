import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SecaoProdutosComponent } from './secao-produtos.component';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';

describe('SecaoProdutosComponent', () => {
  let component: SecaoProdutosComponent;
  let fixture: ComponentFixture<SecaoProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoProdutosComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [ProdutosService]
    });
    fixture = TestBed.createComponent(SecaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
