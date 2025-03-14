import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-redes-sociais',
  templateUrl: './form-redes-sociais.component.html',
  styleUrls: ['./form-redes-sociais.component.scss']
})
export class FormRedesSociaisComponent {
  @Input({ required: true }) public formGroup!: FormGroup;

  public get linkCustomErrors() {
    return {
      invalidLink: 'Por favor, indique um link válido.',
    };
  }
}
