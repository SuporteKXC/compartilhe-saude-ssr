import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonInteressesComponent } from './skeleton-interesses.component';
import { Skeleton } from 'primeng/skeleton';

describe('SkeletonInteressesComponent', () => {
  let component: SkeletonInteressesComponent;
  let fixture: ComponentFixture<SkeletonInteressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonInteressesComponent, Skeleton]
    });
    fixture = TestBed.createComponent(SkeletonInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
