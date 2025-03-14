import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDestaqueComponent } from './form-destaque.component';

describe('FormDestaqueComponent', () => {
  let component: FormDestaqueComponent;
  let fixture: ComponentFixture<FormDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
