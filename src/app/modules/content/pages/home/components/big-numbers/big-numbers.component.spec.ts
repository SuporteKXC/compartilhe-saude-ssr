import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumbersComponent } from './big-numbers.component';

describe('BigNumbersComponent', () => {
  let component: BigNumbersComponent;
  let fixture: ComponentFixture<BigNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigNumbersComponent]
    });
    fixture = TestBed.createComponent(BigNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
