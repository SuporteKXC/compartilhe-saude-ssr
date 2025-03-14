import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioPanelOptionPixComponent } from './radio-panel-option-pix.component';

describe('RadioPanelOptionPixComponent', () => {
  let component: RadioPanelOptionPixComponent;
  let fixture: ComponentFixture<RadioPanelOptionPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioPanelOptionPixComponent],
    });
    fixture = TestBed.createComponent(RadioPanelOptionPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
