import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePagamentoSeguroComponent } from './badge-pagamento-seguro.component';

describe('BadgePagamentoSeguroComponent', () => {
  let component: BadgePagamentoSeguroComponent;
  let fixture: ComponentFixture<BadgePagamentoSeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgePagamentoSeguroComponent]
    });
    fixture = TestBed.createComponent(BadgePagamentoSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
