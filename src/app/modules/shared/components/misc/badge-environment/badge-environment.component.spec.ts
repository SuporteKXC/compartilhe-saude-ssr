import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeEnvironmentComponent } from './badge-environment.component';

describe('BadgeEnvironmentComponent', () => {
  let component: BadgeEnvironmentComponent;
  let fixture: ComponentFixture<BadgeEnvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeEnvironmentComponent]
    });
    fixture = TestBed.createComponent(BadgeEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
