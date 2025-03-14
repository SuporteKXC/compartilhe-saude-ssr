import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-situacao',
  templateUrl: './form-situacao.component.html',
  styleUrls: ['./form-situacao.component.scss'],
})
export class FormSituacaoComponent {
  @Input() formGroup!: FormGroup;

  @Output() changed = new EventEmitter<boolean>();

  changedInputState(event: boolean) {
    this.changed.emit(event);
  }
}
