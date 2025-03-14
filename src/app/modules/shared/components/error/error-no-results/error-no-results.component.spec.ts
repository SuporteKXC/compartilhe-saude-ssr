import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoResultsComponent } from './error-no-results.component';

describe('ErrorNoResultsComponent', () => {
  let component: ErrorNoResultsComponent;
  let fixture: ComponentFixture<ErrorNoResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorNoResultsComponent]
    });
    fixture = TestBed.createComponent(ErrorNoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
