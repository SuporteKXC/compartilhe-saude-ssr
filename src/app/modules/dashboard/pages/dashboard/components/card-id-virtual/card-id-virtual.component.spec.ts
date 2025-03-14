import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIdVirtualComponent } from './card-id-virtual.component';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';

describe('CardIdVirtualComponent', () => {
  let component: CardIdVirtualComponent;
  let fixture: ComponentFixture<CardIdVirtualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonModule, DialogModule],
      declarations: [CardIdVirtualComponent]
    });
    fixture = TestBed.createComponent(CardIdVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
