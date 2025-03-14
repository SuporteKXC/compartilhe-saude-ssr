import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Optional,
  Self,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseFormComponent } from '../base-form-component';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent extends BaseFormComponent implements AfterViewInit {
  @ViewChild('input', { static: false }) inputElement?: ElementRef<HTMLInputElement>;

  @Input() public placeholder = '';
  @Input() public icon = '';
  @Input() public mask: string | string[] = '';
  @Input() public errorMarginBottom?: string;
  @Input() public maxlength = '255';
  @Input() public autocomplete: 'on' | 'off' = 'on';

  @Input() public tooltipContent!: TemplateRef<HTMLElement> | string;

  public override value?: string;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    if (this.mask && this.inputElement) {
      Inputmask({
        mask: this.mask,
        placeholder: ' ',
        greedy: true,
        jitMasking: true,
        showMaskOnFocus: false,
        showMaskOnHover: false,
        keepStatic: true,
      }).mask(this.inputElement.nativeElement);
    }
  }

  public onInputTextChange(event?: Event) {
    const target = event?.target as HTMLInputElement;

    const value = target.value;
    this.onChange(value);
  }

  setValue(event?: Event) {
    const target = event?.target as HTMLInputElement;
    this.value = target.value;
  }
}
