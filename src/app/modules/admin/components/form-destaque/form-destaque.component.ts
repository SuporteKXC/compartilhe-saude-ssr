import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-destaque',
  templateUrl: './form-destaque.component.html',
  styleUrls: ['./form-destaque.component.scss'],
})
export class FormDestaqueComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() disable = false;

}
