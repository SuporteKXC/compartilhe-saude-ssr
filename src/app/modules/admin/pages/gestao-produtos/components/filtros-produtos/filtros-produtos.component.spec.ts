import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosProdutosComponent } from './filtros-produtos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FiltrosProdutosComponent', () => {
  let component: FiltrosProdutosComponent;
  let fixture: ComponentFixture<FiltrosProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FiltrosProdutosComponent]
    });
    fixture = TestBed.createComponent(FiltrosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
