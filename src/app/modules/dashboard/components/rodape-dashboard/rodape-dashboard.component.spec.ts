import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeDashboardComponent } from './rodape-dashboard.component';

describe('RodapeComponent', () => {
  let component: RodapeDashboardComponent;
  let fixture: ComponentFixture<RodapeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodapeDashboardComponent]
    });
    fixture = TestBed.createComponent(RodapeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
