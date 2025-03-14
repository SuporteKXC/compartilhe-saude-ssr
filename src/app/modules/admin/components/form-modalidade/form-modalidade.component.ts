import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioOption } from 'src/app/modules/shared/models/radio-option.model';

@Component({
  selector: 'app-form-modalidade',
  templateUrl: './form-modalidade.component.html',
  styleUrls: ['./form-modalidade.component.scss']
})
export class FormModalidadeComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) options: RadioOption<unknown>[] = [];
  @Input() required = true;
}
