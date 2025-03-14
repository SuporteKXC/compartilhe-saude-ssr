import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardDetalhesProdutoComponent } from './skeleton-card-detalhes-produto.component';

describe('SkeletonCardDetalhesProdutoComponent', () => {
  let component: SkeletonCardDetalhesProdutoComponent;
  let fixture: ComponentFixture<SkeletonCardDetalhesProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonCardDetalhesProdutoComponent]
    });
    fixture = TestBed.createComponent(SkeletonCardDetalhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
