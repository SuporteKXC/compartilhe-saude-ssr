import { Component, EventEmitter, Input, Optional, Output, Self, ViewChild } from '@angular/core';
import { SelectOption } from '../select/models/select-option.model';
import { NgControl } from '@angular/forms';
import { BaseFormComponent } from '../base-form-component';
import { MultiSelect, MultiSelectChangeEvent } from 'primeng/multiselect';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent extends BaseFormComponent {
  @Input() placeholder = '';
  @Input() emptyMessage = 'Nenhum item encontrado';
  @Input() filterPlaceHolder = 'Buscar';

  @Input() appendTo?: string;

  @Input() options!: SelectOption<unknown>[];

  @Input() preventDefaultBehaviorForClick = false;
  @Input() showClear = false;
  @Input() showHeader = false;

  @Input() virtualScrollConfig: { enabled: boolean; itemSize?: number; step?: number } = {
    enabled: false,
  };
  @Input() lazyLoad = false;

  @Output() optionSelected = new EventEmitter();
  @Output() loadNewData = new EventEmitter();

  @ViewChild('multiselect') components!: MultiSelect;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public handleChange(event: MultiSelectChangeEvent | null) {
    this.onChange(event?.value ?? null);

    this.optionSelected.emit();
  }

  public handleOnClick(event: Event) {
    if (this.preventDefaultBehaviorForClick) event.preventDefault();
  }

  protected onResetAll() {
    this.components._filterValue = undefined;
    this.components._filteredOptions = undefined;
  }
}
