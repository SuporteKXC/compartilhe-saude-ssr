import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMeusPedidosComponent } from './skeleton-meus-pedidos.component';

describe('SkeletonMeusPedidosComponent', () => {
  let component: SkeletonMeusPedidosComponent;
  let fixture: ComponentFixture<SkeletonMeusPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonMeusPedidosComponent]
    });
    fixture = TestBed.createComponent(SkeletonMeusPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
