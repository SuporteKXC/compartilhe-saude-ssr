import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupOdontologiaComponent } from './checkup-odontologia.component';

describe('CheckupOdontologiaComponent', () => {
  let component: CheckupOdontologiaComponent;
  let fixture: ComponentFixture<CheckupOdontologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckupOdontologiaComponent]
    });
    fixture = TestBed.createComponent(CheckupOdontologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
