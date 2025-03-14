import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { getErrorMessage } from '../../functions/error-handling/error-message';

@Directive()
export abstract class BaseFormComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() public formControlName = '';
  @Input() public label?: string;
  @Input() public labelSrOnly = false;
  @Input() public customErrors?: { [key: string]: string };

  public value?: unknown;

  public onChange!: (value: typeof this.value) => void;
  public onTouched!: () => void;

  public get group(): FormGroup {
    return this.ngControl?.control?.parent as FormGroup;
  }

  public get control(): FormControl {
    return this.ngControl?.control as FormControl;
  }

  constructor(protected ngControl?: NgControl) {
    if (ngControl) {
      this.ngControl = ngControl;
      this.ngControl.valueAccessor = this;
    }
  }

  public get errorMessage(): string | null {
    const control = this.ngControl?.control;

    if (control?.invalid && control?.dirty)
      return getErrorMessage(control.errors, this.customErrors);

    return null;
  }

  public writeValue(value: unknown): void {
    this.value = value;
  }

  public registerOnChange(fn: (event: typeof this.value) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    const control = this.ngControl?.control;

    // if user has set [disabled]="true" in component, make sure the control is disabled as well
    if (this.disabled && !control?.disabled) {
      control?.disable();

      return;
    }

    this.disabled = isDisabled;
  }

  public getControlStateClasses(): string {
    let classes = '';
    if (this.disabled) {
      classes += ' p-disabled';
    }
    if (this.errorMessage) {
      classes += ' invalid';
    }
    return classes.trim();
  }
}
