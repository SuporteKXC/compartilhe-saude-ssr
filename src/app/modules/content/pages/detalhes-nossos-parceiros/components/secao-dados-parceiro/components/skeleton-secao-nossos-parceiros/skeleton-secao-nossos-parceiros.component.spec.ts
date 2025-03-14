import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSecaoNossosParceirosComponent } from './skeleton-secao-nossos-parceiros.component';

describe('SkeletonSecaoNossosParceirosComponent', () => {
  let component: SkeletonSecaoNossosParceirosComponent;
  let fixture: ComponentFixture<SkeletonSecaoNossosParceirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonSecaoNossosParceirosComponent]
    });
    fixture = TestBed.createComponent(SkeletonSecaoNossosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
