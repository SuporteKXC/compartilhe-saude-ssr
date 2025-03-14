import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoParceiroPage } from './novo-parceiro.page';

describe('CadastrarParceiroPage', () => {
  let component: NovoParceiroPage;
  let fixture: ComponentFixture<NovoParceiroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoParceiroPage]
    });
    fixture = TestBed.createComponent(NovoParceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
