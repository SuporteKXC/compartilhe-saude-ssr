import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-informacoes-profissionais',
  templateUrl: './form-informacoes-profissionais.component.html',
  styleUrls: ['./form-informacoes-profissionais.component.scss']
})
export class FormInformacoesProfissionaisComponent {
  @Input({ required: true }) public formGroup!: FormGroup;
}
