import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardProdutosComponent } from './skeleton-card-produtos.component';
import { SkeletonModule } from 'primeng/skeleton';

describe('SkeletonCheckupComponent', () => {
  let component: SkeletonCardProdutosComponent;
  let fixture: ComponentFixture<SkeletonCardProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonModule],
      declarations: [SkeletonCardProdutosComponent]
    });
    fixture = TestBed.createComponent(SkeletonCardProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
