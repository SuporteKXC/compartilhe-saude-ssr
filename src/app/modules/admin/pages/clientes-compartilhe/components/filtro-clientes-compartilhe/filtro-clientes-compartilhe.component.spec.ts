import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroClientesCompartilheComponent } from './filtro-clientes-compartilhe.component';

describe('FiltroClientesCompartilheComponent', () => {
  let component: FiltroClientesCompartilheComponent;
  let fixture: ComponentFixture<FiltroClientesCompartilheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroClientesCompartilheComponent]
    });
    fixture = TestBed.createComponent(FiltroClientesCompartilheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
