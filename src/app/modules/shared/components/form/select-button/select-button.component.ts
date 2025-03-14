import { Component, Input, Optional, Self } from '@angular/core';
import { SelectOption } from '../select/models/select-option.model';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent extends BaseFormComponent {
  @Input() options!: SelectOption<unknown>[];
  @Input() placeholder = '';

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }
}
