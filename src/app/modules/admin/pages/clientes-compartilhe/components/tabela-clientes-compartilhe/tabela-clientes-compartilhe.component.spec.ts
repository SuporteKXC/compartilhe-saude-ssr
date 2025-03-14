import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaClientesCompartilheComponent } from './tabela-clientes-compartilhe.component';
import { Subject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TabelaClientesCompartilheComponent', () => {
  let component: TabelaClientesCompartilheComponent;
  let fixture: ComponentFixture<TabelaClientesCompartilheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TabelaClientesCompartilheComponent]
    });
    fixture = TestBed.createComponent(TabelaClientesCompartilheComponent);
    component = fixture.componentInstance;

    component.shouldSearchAgain$ = new Subject();
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
