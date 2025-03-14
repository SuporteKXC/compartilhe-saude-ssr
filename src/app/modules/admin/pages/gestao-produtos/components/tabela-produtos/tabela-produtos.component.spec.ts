import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProdutosComponent } from './tabela-produtos.component';
import { Subject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TabelaProdutosComponent', () => {
  let component: TabelaProdutosComponent;
  let fixture: ComponentFixture<TabelaProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TabelaProdutosComponent]
    });
    fixture = TestBed.createComponent(TabelaProdutosComponent);
    component = fixture.componentInstance;
    
    component.shouldSearchAgain$ = new Subject();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
