import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-fieldset',
  templateUrl: './form-fieldset.component.html',
  styleUrls: ['./form-fieldset.component.scss'],
})
export class FormFieldsetComponent {
  @Input() titulo!: string;
  @Input() required = false;
  @Input() tooltipContent?: string;
}
