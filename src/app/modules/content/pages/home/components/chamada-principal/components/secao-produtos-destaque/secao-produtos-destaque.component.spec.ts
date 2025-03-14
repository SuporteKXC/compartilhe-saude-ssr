import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoProdutosDestaqueComponent } from './secao-produtos-destaque.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecaoProdutosDestaqueComponent', () => {
  let component: SecaoProdutosDestaqueComponent;
  let fixture: ComponentFixture<SecaoProdutosDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SecaoProdutosDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoProdutosDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
