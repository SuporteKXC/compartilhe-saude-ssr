import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoParceirosPage } from './gestao-parceiros.page';

describe('GestaoParceirosPage', () => {
  let component: GestaoParceirosPage;
  let fixture: ComponentFixture<GestaoParceirosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoParceirosPage],
    });
    fixture = TestBed.createComponent(GestaoParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
