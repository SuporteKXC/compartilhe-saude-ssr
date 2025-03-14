import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSecaoDetalhesComponent } from './skeleton-secao-detalhes.component';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';

describe('SkeletonSecaoDetalhesComponent', () => {
  let component: SkeletonSecaoDetalhesComponent;
  let fixture: ComponentFixture<SkeletonSecaoDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonModule],
      declarations: [SkeletonSecaoDetalhesComponent, Skeleton]
    });
    fixture = TestBed.createComponent(SkeletonSecaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
