import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMeuCarrinhoComponent } from './skeleton-meu-carrinho.component';

describe('SkeletonMeuCarrinhoComponent', () => {
  let component: SkeletonMeuCarrinhoComponent;
  let fixture: ComponentFixture<SkeletonMeuCarrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonMeuCarrinhoComponent]
    });
    fixture = TestBed.createComponent(SkeletonMeuCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
