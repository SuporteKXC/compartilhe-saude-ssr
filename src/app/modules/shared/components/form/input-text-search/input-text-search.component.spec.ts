import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextSearchComponent } from './input-text-search.component';

describe('InputTextSearchComponent', () => {
  let component: InputTextSearchComponent;
  let fixture: ComponentFixture<InputTextSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextSearchComponent]
    });
    fixture = TestBed.createComponent(InputTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
