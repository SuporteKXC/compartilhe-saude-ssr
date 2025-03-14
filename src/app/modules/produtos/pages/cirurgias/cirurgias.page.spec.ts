import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirurgiasPage } from './cirurgias.page';

describe('CirurgiasPage', () => {
  let component: CirurgiasPage;
  let fixture: ComponentFixture<CirurgiasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirurgiasPage]
    });
    fixture = TestBed.createComponent(CirurgiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
