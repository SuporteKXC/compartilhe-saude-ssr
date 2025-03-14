import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCarouselComponent } from './timeline-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from 'src/app/modules/shared/components/carousel/carousel.component';

describe('TimelineCarouselComponent', () => {
  let component: TimelineCarouselComponent;
  let fixture: ComponentFixture<TimelineCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule],
      declarations: [CarouselComponent, TimelineCarouselComponent],
    });
    fixture = TestBed.createComponent(TimelineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
