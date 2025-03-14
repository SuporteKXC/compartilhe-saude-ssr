import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCirurgiasPage } from './detalhes-cirurgias.page';

describe('DetalhesCirurgiasPage', () => {
  let component: DetalhesCirurgiasPage;
  let fixture: ComponentFixture<DetalhesCirurgiasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesCirurgiasPage]
    });
    fixture = TestBed.createComponent(DetalhesCirurgiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
