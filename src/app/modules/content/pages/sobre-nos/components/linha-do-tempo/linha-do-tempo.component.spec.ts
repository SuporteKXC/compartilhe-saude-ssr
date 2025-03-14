import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaDoTempoComponent } from './linha-do-tempo.component';
import { TimelineCarouselComponent } from './components/timeline-carousel/timeline-carousel.component';
import { TimelineSectionComponent } from './components/timeline-section/timeline-section.component';

describe('LinhaDoTempoComponent', () => {
  let component: LinhaDoTempoComponent;
  let fixture: ComponentFixture<LinhaDoTempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinhaDoTempoComponent, TimelineCarouselComponent, TimelineSectionComponent]
    });
    fixture = TestBed.createComponent(LinhaDoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
