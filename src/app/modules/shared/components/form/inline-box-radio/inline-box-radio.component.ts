import { Component, Input, Optional, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { RadioOption } from '../../../models/radio-option.model';

@Component({
  selector: 'app-inline-box-radio',
  templateUrl: './inline-box-radio.component.html',
  styleUrls: ['./inline-box-radio.component.scss'],
})
export class InlineBoxRadioComponent extends BaseFormComponent {
  @Input() options!: RadioOption<unknown>[];

  public selectedOptionIndex: number | null = null;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public getOptionId(option: RadioOption<unknown>): string {
    return `${this.name}-${option.value}`;
  }

  public onRadioSelected(option: RadioOption<unknown>) {
    this.onChange(option.value);
  }
}
