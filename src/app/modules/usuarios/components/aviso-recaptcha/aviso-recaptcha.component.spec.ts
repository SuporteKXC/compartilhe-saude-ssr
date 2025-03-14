import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoRecaptchaComponent } from './aviso-recaptcha.component';

describe('AvisoRecaptchaComponent', () => {
  let component: AvisoRecaptchaComponent;
  let fixture: ComponentFixture<AvisoRecaptchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoRecaptchaComponent]
    });
    fixture = TestBed.createComponent(AvisoRecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
