import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSectionComponent } from './timeline-section.component';

describe('TimelineSectionComponent', () => {
  let component: TimelineSectionComponent;
  let fixture: ComponentFixture<TimelineSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineSectionComponent]
    });
    fixture = TestBed.createComponent(TimelineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
