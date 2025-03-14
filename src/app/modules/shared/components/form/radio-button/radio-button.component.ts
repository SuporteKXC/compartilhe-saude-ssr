import { Component, Input, Optional, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { RadioOption } from '../../../models/radio-option.model';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent extends BaseFormComponent {
  @Input() options!: RadioOption<unknown>[];

  public getInputId(value: unknown): string {
    return `${this.name}-${value}`;
  }

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public onRadioClicked(event: Event): void {
    this.onChange((event.target as HTMLInputElement).value);
  }
}
