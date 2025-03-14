import { Component, Input, Optional, Self, TemplateRef } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { RadioOption } from '../../../models/radio-option.model';

@Component({
  selector: 'app-radio-panel',
  templateUrl: './radio-panel.component.html',
  styleUrls: ['./radio-panel.component.scss'],
})
export class RadioPanelComponent extends BaseFormComponent {
  @Input() option!: RadioOption<unknown>;
  @Input() template!: TemplateRef<unknown>;
  @Input() alignCheckbox = 'center';

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public onRadioClicked(): void {
    this.onChange(this.option.value);
  }
}
