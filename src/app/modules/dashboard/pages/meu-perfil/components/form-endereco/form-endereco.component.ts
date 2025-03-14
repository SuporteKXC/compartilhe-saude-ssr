import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard/dashboard.service';
import { CEP_PATTERN } from 'src/app/modules/shared/constants/patterns';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { CidadeService } from 'src/app/modules/shared/services/cidade/cidade.service';
import { AutocompleteItem } from 'src/app/modules/shared/components/form/autocomplete/models/autocomplete-item.model';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { filter, map, pairwise, startWith } from 'rxjs';
import { selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { PerfilService } from '../../services/perfil.service';
import { UF } from 'src/app/modules/shared/enums/uf.enum';
import { MessageService } from 'primeng/api';
import { AutocompleteComponent } from 'src/app/modules/shared/components/form/autocomplete/autocomplete.component';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.scss'],
})
export class FormEnderecoComponent implements AfterViewInit {
  @ViewChild('autoCompleteCidade', { static: false }) autoCompleteCidade?: AutocompleteComponent;

  public formLoading = false;
  private query = '';
  public cidades: AutocompleteItem<number>[] = [];
  public ufOptions = selectOptionsFromEnum(UF);

  public formEndereco = this.fb.group({
    logradouro: this.fb.control('', { validators: Validators.maxLength(255) }),
    numero: this.fb.control('', { validators: Validators.maxLength(20) }),
    complemento: this.fb.control('', { validators: Validators.maxLength(255) }),
    bairro: this.fb.control('', { validators: Validators.maxLength(255) }),
    cep: this.fb.control('', { validators: [Validators.pattern(CEP_PATTERN)] }),
    idCidade: this.fb.control<number | null>(null),
    siglaUf: this.fb.control(''),
  });

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private perfilService: PerfilService,
    private cidadeService: CidadeService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService
  ) {}

  ngAfterViewInit(): void {
    this.perfilService.enderecos.subscribe((dados) => {
      if (dados && dados.length > 0) {
        const cidade = dados[0].cidade;

        if (!cidade) return;

        this.formEndereco.patchValue({ ...dados[0], idCidade: cidade.id });
        this.autoCompleteCidade?.selectItem({
          itemLabel: cidade.nome ?? '',
          value: cidade.id ?? -1,
        });
      }
    });
    this.cdr.detectChanges();
    this.defineListenerMudancaEstado();
  }

  public salvarDadosEndereco(): void {
    this.formLoading = true;

    const idCidade = this.buscaValueCidade();
    const cidade = idCidade ? { id: idCidade } : null;
    this.dashboardService
      .salvarEndereco({ ...this.formEndereco.getRawValue(), cidade })
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Seu endereço foi salvo com sucesso!',
          icon: 'check_circle',
        });
      })
      .add(() => (this.formLoading = false));
  }

  public searchCidades(event: AutoCompleteCompleteEvent): void {
    this.query = event.query;

    this.cidadeService
      .listarCidades(event.query, this.siglaUf)
      .pipe(map((cidades: Cidade[]) => this.convertCidadesToAutocompleteItems(cidades)))
      .subscribe((cidades) => (this.cidades = cidades));
  }

  public get cepCustomErrors() {
    return {
      pattern: 'Por favor, indique um CEP válido.',
    };
  }

  public get emptyMessage(): string | undefined {
    if (this.query) return `Nenhum resultado encontrado para ${this.query}`;
    else return undefined;
  }

  public get siglaUf(): string | undefined {
    return this.formEndereco.get('siglaUf')?.getRawValue();
  }

  private convertCidadesToAutocompleteItems(cidades: Cidade[]): AutocompleteItem<number>[] {
    return cidades.map((cidade) => ({
      itemLabel: `${cidade.nome}`,
      value: cidade.id ?? -1,
    }));
  }

  private buscaValueCidade(): number | null | undefined {
    return this.formEndereco.get('idCidade')?.value;
  }

  private defineListenerMudancaEstado(): void {
    this.formEndereco
      .get('siglaUf')
      ?.valueChanges.pipe(
        startWith(this.formEndereco.get('siglaUf')?.value),
        pairwise(),
        filter((value) => {
          return value[0] !== value[1];
        })
      )
      .subscribe(() => this.formEndereco.get('idCidade')?.setValue(null));
  }
}
