import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseFormComponent } from '../base-form-component';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent extends BaseFormComponent {
  @Input() public placeholder = '';
  @Input() public errorMarginBottom?: string;
  @Input() public valid = true;

  protected isMasked = true;

  public override value?: string;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public onInputPasswordChange(event?: Event) {
    const target = event?.target as HTMLInputElement;

    this.value = target.value;

    this.onChange(this.value);
  }

  toggleMask() {
    this.isMasked = !this.isMasked;
  }
}
