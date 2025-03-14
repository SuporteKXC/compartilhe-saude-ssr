import { AfterViewInit, Component, EventEmitter, Input, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AutocompleteItem } from '../autocomplete/models/autocomplete-item.model';
import { CidadeService } from '../../../services/cidade/cidade.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { map } from 'rxjs';
import { Cidade } from '../../../models/endereco/cidade.model';
import { AutocompleteEvent } from '../autocomplete/models/autocomplete-event.model';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'app-search-cidade',
  templateUrl: './search-cidade.component.html',
  styleUrls: ['./search-cidade.component.scss']
})
export class SearchCidadeComponent extends AutocompleteComponent implements AfterViewInit {
  @ViewChild('autoCompleteBusca', { static: false }) autoCompleteBusca?: AutocompleteComponent;

  @Input() preSelected?: AutocompleteItem<Cidade>;
  @Input() showEstado = true;

  @Output() handleSearchAndClear: EventEmitter<AutocompleteEvent> = new EventEmitter();

  protected cidades: AutocompleteItem<Cidade>[] = [];
  private query = '';

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
    private cidadeService: CidadeService
  ) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    if (this.preSelected) {
      this.autoCompleteBusca?.selectItem({
        itemLabel: `${this.preSelected.itemLabel} - ${this.preSelected.value.siglaUf}`,
        value: this.preSelected.value
      });
    }
  }

  get emptyMessageSearchCidade(): string | undefined {
    if (this.query) return `Nenhum resultado encontrado para ${this.query}`;
    else return undefined;
  }

  searchCidades(event: AutoCompleteCompleteEvent): void {
    this.query = event.query;

    this.cidadeService
      .listarCidades(this.query)
      .pipe(map((cidades) => this.convertCidadesToAutocompleteItems(cidades)))
      .subscribe((cidades) => (this.cidades = cidades));
  }

  convertCidadesToAutocompleteItems(cidades: Cidade[]): AutocompleteItem<Cidade>[] {
    const label = (cidade: Cidade) => this.showEstado ? `${cidade.nome} - ${cidade.siglaUf}` : `${cidade.nome}`;
    return cidades.map((cidade) => ({
      itemLabel: label(cidade),
      value: {
        id: cidade.id,
        nome: cidade.nome,
        siglaUf: cidade.siglaUf,
      },
    }));
  }

  searchAndClearEvent(event: AutocompleteEvent) {
    this.handleSearchAndClear.emit(event);
  }
}
