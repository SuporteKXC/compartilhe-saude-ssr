import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends BaseFormComponent implements AfterViewInit {
  @ViewChild('input', { static: false }) inputElement?: ElementRef<HTMLInputElement>;

  @Input() public mode: 'decimal' | 'percentage' | 'normal' = 'decimal';
  @Input() public fractionDigits = 2;
  @Input() public negative = false;

  @Input() public prefix!: string;
  @Input() public placeholder = '';
  @Input() public forceErrorMessage = '';

  @Input() public tooltipContent!: TemplateRef<HTMLElement> | string;
  @Input() public errorMarginBottom?: string;

  @Output() handleChange = new EventEmitter();

  public override value?: string;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    const maskMode = {
      'normal': {},
      'decimal': {
        positionCaretOnClick: 'select',
        alias: this.mode,
        digits: this.fractionDigits,
        radixPoint: ',',
        digitsOptional: false,
        numericInput: true,
        placeholder: '0',
        negationSymbol: this.negative ? undefined : { front: '', back: '' },
      },
      'percentage': {
        positionCaretOnClick: 'select',
        alias: this.mode,
        digits: this.fractionDigits,
        radixPoint: ',',
        digitsOptional: false,
        numericInput: true,
        placeholder: '0',
        negationSymbol: this.negative ? undefined : { front: '', back: '' },
      }
    };
    if (this.inputElement) {
      Inputmask(maskMode[this.mode] as Inputmask.Options)
        .mask(this.inputElement.nativeElement);
    }
  }

  public onInputTextChange(event?: Event) {
    const target = event?.target as HTMLInputElement;

    const value = parseFloat(target.value.replace(',', '.'));
    this.onChange(value);
    this.handleChange.emit(value);
  }

  setValue(event?: Event) {
    const target = event?.target as HTMLInputElement;
    this.value = target.value;
  }
}
