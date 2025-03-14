import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCompartilhePage } from './clientes-compartilhe.page';

describe('ClientesCompartilhePage', () => {
  let component: ClientesCompartilhePage;
  let fixture: ComponentFixture<ClientesCompartilhePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesCompartilhePage]
    });
    fixture = TestBed.createComponent(ClientesCompartilhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
