import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-search',
  templateUrl: './input-text-search.component.html',
  styleUrls: ['./input-text-search.component.scss'],
})
export class InputTextSearchComponent extends BaseFormComponent {
  @Input() public placeholder = '';
  @Input() public disableSearch = false;
  @Input() public minLength = 3;
  @Input() public maxLength = '255';
  @Input() public autocomplete: 'on' | 'off' = "on";

  @Output() public search = new EventEmitter();

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public get shouldDisableSearch(): boolean {
    const valueLength = (this.value as string | null)?.length ?? 0;

    return this.disableSearch || (valueLength > 0 && valueLength < this.minLength);
  }

  public handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') this.handleSearch();
  }

  public onInputTextChange(event?: Event) {
    const target = event?.target as HTMLInputElement;
    this.value = target.value;

    this.onChange(this.value);
  }

  public handleSearch() {
    if (!this.shouldDisableSearch) this.search.emit();
  }
}
