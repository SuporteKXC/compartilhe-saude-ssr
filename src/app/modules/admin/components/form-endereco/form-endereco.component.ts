import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Subscription, map } from 'rxjs';
import { UF } from 'src/app/modules/shared/enums/uf.enum';
import { AutocompleteComponent } from 'src/app/modules/shared/components/form/autocomplete/autocomplete.component';
import { AutocompleteItem } from 'src/app/modules/shared/components/form/autocomplete/models/autocomplete-item.model';
import { selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { CidadeService } from 'src/app/modules/shared/services/cidade/cidade.service';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.scss'],
})
export class FormEnderecoComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('autoCompleteCidade', { static: false }) autoCompleteCidade?: AutocompleteComponent;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input() data!: Cidade | null;

  @Input() required = false;

  @Input() tooltipContent?: string;

  @Output() changeForm = new EventEmitter<boolean>();

  public ufOptions = selectOptionsFromEnum(UF);

  private query = '';
  public cidades: AutocompleteItem<Cidade>[] = [];

  private ufSiglaChangeSubscription?: Subscription;

  public get siglaUf(): string | undefined {
    return this.formGroup.get('siglaUf')?.getRawValue();
  }

  public get emptyMessage(): string | undefined {
    if (this.query) return `Nenhum resultado encontrado para ${this.query}`;
    else return undefined;
  }

  public get cepCustomErrors() {
    return {
      pattern: 'Por favor, indique um CEP válido.',
    };
  }

  constructor(private cidadeService: CidadeService) { }

  ngOnChanges(change: SimpleChanges): void {
    if (change['data'] && this.data) {
      this.autoCompleteCidade?.selectItem({
        itemLabel: this.data.nome ?? '',
        value: this.data ?? null,
      });
    }
  }

  ngOnInit(): void {
    this.ufSiglaChangeSubscription = this.formGroup
      ?.get('siglaUf')
      ?.valueChanges.subscribe(() => this.formGroup.get('idCidade')?.reset());
  }

  ngOnDestroy(): void {
    this.ufSiglaChangeSubscription?.unsubscribe();
  }

  public searchCidades(event: AutoCompleteCompleteEvent): void {
    this.query = event.query;

    this.cidadeService
      .listarCidades(event.query, this.siglaUf)
      .pipe(map((cidades: Cidade[]) => this.convertCidadesToAutocompleteItems(cidades)))
      .subscribe((cidades) => (this.cidades = cidades));
  }

  private convertCidadesToAutocompleteItems(cidades: Cidade[]): AutocompleteItem<Cidade>[] {
    return cidades.map((cidade) => ({
      itemLabel: `${cidade.nome}`,
      value: cidade,
    }));
  }

  public clearCidade() {
    this.autoCompleteCidade?.selectItem({ itemLabel: '', value: null });
  }

  handleChangeForm() {
    this.changeForm.emit(Boolean(this.data));
    this.data = null;
  }
}
