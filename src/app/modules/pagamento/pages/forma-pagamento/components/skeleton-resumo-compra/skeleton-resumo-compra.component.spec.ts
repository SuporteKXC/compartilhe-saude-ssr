import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonResumoCompraComponent } from './skeleton-resumo-compra.component';

describe('SkeletonResumoCompraComponent', () => {
  let component: SkeletonResumoCompraComponent;
  let fixture: ComponentFixture<SkeletonResumoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonResumoCompraComponent]
    });
    fixture = TestBed.createComponent(SkeletonResumoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
