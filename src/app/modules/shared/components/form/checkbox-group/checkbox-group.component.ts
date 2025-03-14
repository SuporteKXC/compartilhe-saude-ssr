import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent extends BaseFormComponent {
  @Input() data!: { label: string, value: unknown }[];

  @Output() handleChange = new EventEmitter();

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  handleChangeEvent($event: CheckboxChangeEvent) {
    this.onChange($event.checked);
    this.handleChange.emit(this.value);
  }
}
