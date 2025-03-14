import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'primeng/carousel';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule],
      declarations: [CarouselComponent],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;

    component.items = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
