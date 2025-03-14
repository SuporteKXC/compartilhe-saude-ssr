import {
  Component,
  Input,
  Optional,
  Self,
  TemplateRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseFormComponent } from '../base-form-component';

@Component({

  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent extends BaseFormComponent {
  @Input() public placeholder = '';
  @Input() public rows!: number;
  @Input() public cols!: number;

  @Input() public tooltipContent!: TemplateRef<HTMLElement> | string;
  @Input() public errorMarginBottom?: string;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  public onInputTextChange(event?: Event) {
    const target = event?.target as HTMLInputElement;

    this.onChange(target.value);
  }
}
