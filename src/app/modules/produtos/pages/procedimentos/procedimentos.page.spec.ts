import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentosPage } from './procedimentos.page';

describe('ProcedimentosPage', () => {
  let component: ProcedimentosPage;
  let fixture: ComponentFixture<ProcedimentosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcedimentosPage]
    });
    fixture = TestBed.createComponent(ProcedimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
