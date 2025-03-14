import { Component, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { FormControl, NgControl } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent extends BaseFormComponent implements OnInit {
  @ViewChild(Checkbox, { static: true }) checkboxComponent!: Checkbox;

  @Input() override value?: boolean | unknown;
  public formControl?: FormControl;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  // necessário para inicializar checkbox com o valor correto
  // o default é o checkbox não checado, mesmo se o valor é true
  ngOnInit(): void {
    this.checkboxComponent.writeValue(this.value);
  }
}
