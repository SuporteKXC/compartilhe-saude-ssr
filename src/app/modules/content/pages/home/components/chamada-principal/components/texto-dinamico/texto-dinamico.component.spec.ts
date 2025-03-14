/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoDinamicoComponent } from './texto-dinamico.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TextoDinamicoComponent', () => {
  let component: TextoDinamicoComponent;
  let fixture: ComponentFixture<TextoDinamicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ TextoDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
