import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BaseFormComponent } from '../base-form-component';
import { AutocompleteItem } from './models/autocomplete-item.model';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { filter } from 'rxjs';
import { AutocompleteEvent } from './models/autocomplete-event.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent extends BaseFormComponent implements OnInit {
  @ViewChild(AutoComplete, { static: false }) autocompleteComponent?: AutoComplete;

  @Input() forceSelection = false;

  @Input() suggestions!: AutocompleteItem<unknown>[];
  @Output() completeMethod: EventEmitter<AutoCompleteCompleteEvent> = new EventEmitter();

  @Output() itemSelected: EventEmitter<AutocompleteEvent> = new EventEmitter();

  @Input() placeholder = '';
  @Input() icon = '';

  @Input() emptyMessage?: string;
  @Input() suggestionTemplate?: TemplateRef<unknown>;
  @Input() autocomplete: 'on' | 'off' = 'on';

  ngOnInit(): void {
    this.control?.valueChanges
      .pipe(
        filter(
          (value) =>
            value === null ||
            Object.keys(value).toString() !==
              (['itemLabel', 'value'] satisfies (keyof AutocompleteItem<unknown>)[]).toString()
        )
      )
      .subscribe((value) => {
        // O value é uma string vazia quando não há nenhum valor selecionado,
        // que é quando é relevante emitir que o valor selecionado mudou (pra nada agora)
        if (value === '') {
          this.itemSelected.emit({isClear: true});

          this.onChange(null); // seguir convenção de que nenhum valor selecionado é o valor null
        }
      });
  }

  public onItemSelect(valueSelected: AutocompleteItem<unknown>) {
    this.onChange(valueSelected.value);
    this.itemSelected.emit({isClear: false});
  }

  public selectItem(item: AutocompleteItem<unknown>) {
    setTimeout(() => {
      this.autocompleteComponent?.selectItem(item, false);
      this.autocompleteComponent?.inputEL?.nativeElement.blur();
    });
  }
}
