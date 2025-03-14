import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-seller-id',
  templateUrl: './form-seller-id.component.html',
  styleUrls: ['./form-seller-id.component.scss']
})
export class FormSellerIdComponent {
  @Input() formGroup!: FormGroup;
  @Input() tooltipContent?: string;

  protected get sellerIdCustomErrors() {
    return {
      pattern: 'Por favor, indique um ID seller válido.',
    };
  }
}
