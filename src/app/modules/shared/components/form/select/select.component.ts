import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';
import { SelectOption } from './models/select-option.model';
import { Dropdown, DropdownChangeEvent } from 'primeng/dropdown';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseFormComponent {
  @Input() dataTestid!: string;
  @Input() placeholder = '';
  @Input() emptyMessage = 'Nenhum item encontrado';

  @Input() options!: SelectOption<unknown>[];
  @Input() filter = false;

  @Input() preventDefaultBehaviorForClick = false;
  @Input() showClear = false;

  @Input() virtualScrollConfig: { enabled: boolean; itemSize?: number; step?: number } = {
    enabled: false,
  };
  @Input() lazyLoad = false;

  @Output() optionSelected = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() loadNewData = new EventEmitter();

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);

    // HACK Workaround de um issue ainda aberto (!!) (pelo menos por enquanto) do primeng
    // https://github.com/primefaces/primeng/issues/13916
    const originalOnKeydown = Dropdown.prototype.onKeydown;
    Dropdown.prototype.onKeydown = function (event: KeyboardEvent, search: boolean) {
      if (event.key === 'Tab') {
        this.hide();
        return;
      }
      originalOnKeydown.apply(this, [event, search]);
    };
  }

  public handleDropdownChange(event: DropdownChangeEvent) {
    this.optionSelected.emit();

    this.onChange(event.value);
  }

  public handleOnClick(event: MouseEvent) {
    if (this.preventDefaultBehaviorForClick) event.preventDefault();
  }

  public handleOnClear(event: Event) {
    this.clear.emit(event);
  }
}
