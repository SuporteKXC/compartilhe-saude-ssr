import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSaudeComponent } from './connect-saude.component';

describe('ConnectSaudeComponent', () => {
  let component: ConnectSaudeComponent;
  let fixture: ComponentFixture<ConnectSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectSaudeComponent]
    });
    fixture = TestBed.createComponent(ConnectSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
