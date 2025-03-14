import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBoxRadioComponent } from './inline-box-radio.component';

describe('InlineBoxRadioComponent', () => {
  let component: InlineBoxRadioComponent;
  let fixture: ComponentFixture<InlineBoxRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineBoxRadioComponent],
    });
    fixture = TestBed.createComponent(InlineBoxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
