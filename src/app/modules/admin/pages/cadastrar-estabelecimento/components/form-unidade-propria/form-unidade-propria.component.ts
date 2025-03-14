import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-unidade-propria',
  templateUrl: './form-unidade-propria.component.html',
  styleUrls: ['./form-unidade-propria.component.scss'],
})
export class FormUnidadePropriaComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() disable = false;
}
