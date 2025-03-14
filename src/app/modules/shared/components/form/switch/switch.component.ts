import { Component, EventEmitter, Optional, Output, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent extends BaseFormComponent {
  @Output() handleChange = new EventEmitter<boolean>();

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  handleChangeEvent(event: InputSwitchOnChangeEvent) {
    this.handleChange.emit(event.checked);
  }
}
