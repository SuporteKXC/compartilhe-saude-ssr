import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPanelComponent } from './radio-panel.component';

describe('RadioPanelComponent', () => {
  let component: RadioPanelComponent;
  let fixture: ComponentFixture<RadioPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioPanelComponent]
    });
    fixture = TestBed.createComponent(RadioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
