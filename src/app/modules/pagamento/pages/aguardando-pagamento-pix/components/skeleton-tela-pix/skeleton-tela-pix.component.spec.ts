import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTelaPixComponent } from './skeleton-tela-pix.component';

describe('SkeletonTelaPixComponent', () => {
  let component: SkeletonTelaPixComponent;
  let fixture: ComponentFixture<SkeletonTelaPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonTelaPixComponent]
    });
    fixture = TestBed.createComponent(SkeletonTelaPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
