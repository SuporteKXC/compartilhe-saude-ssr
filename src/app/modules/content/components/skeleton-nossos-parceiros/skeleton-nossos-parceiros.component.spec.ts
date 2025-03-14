import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonNossosParceirosComponent } from './skeleton-nossos-parceiros.component';

describe('SkeletonComponent', () => {
  let component: SkeletonNossosParceirosComponent;
  let fixture: ComponentFixture<SkeletonNossosParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonModule],
      declarations: [SkeletonNossosParceirosComponent]
    });
    fixture = TestBed.createComponent(SkeletonNossosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
