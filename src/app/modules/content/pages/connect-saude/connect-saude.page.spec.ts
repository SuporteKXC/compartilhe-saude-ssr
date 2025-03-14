import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSaudePage } from './connect-saude.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConnectSaudeComponent', () => {
  let component: ConnectSaudePage;
  let fixture: ComponentFixture<ConnectSaudePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ConnectSaudePage]
    });
    fixture = TestBed.createComponent(ConnectSaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
