import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve chamar a função quando o botão recebe o evento de click', fakeAsync(() => {
    const fakeHandleClick = jest.spyOn(component.handleClick, 'emit');

    component.handleClickEvent();
    tick();

    expect(fakeHandleClick).toHaveBeenCalled();
  }));
});
