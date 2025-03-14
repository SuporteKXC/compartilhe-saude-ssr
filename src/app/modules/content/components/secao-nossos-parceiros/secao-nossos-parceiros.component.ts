import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ParceiroEspecialidade } from 'src/app/modules/shared/models/parceiro/parceiro-especialidade.model';
import { CategoriaParceiroEnum } from 'src/app/modules/admin/pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { AutocompleteItem } from 'src/app/modules/shared/components/form/autocomplete/models/autocomplete-item.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { ParceirosParams } from '../../models/parceiros-params.model';
import { NossosParceirosFiltro } from '../../pages/nossos-parceiros/models/nossos-parceiros-filtro.model';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { ParceiroState } from '../../models/parceiros-state.model';
import { MOBILE_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { Parceiro } from 'src/app/modules/admin/models/parceiro.model';
import { isPlatformBrowser, Location } from '@angular/common';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';
import { filterParams } from 'src/app/modules/shared/functions/util/filter-params.function';
import { ParceiroSubcategoria } from 'src/app/modules/shared/models/parceiro/parceiro-subcategoria.model';

@Component({
  selector: 'app-secao-nossos-parceiros',
  templateUrl: './secao-nossos-parceiros.component.html',
  styleUrls: ['./secao-nossos-parceiros.component.scss']
})
export class SecaoNossosParceirosComponent implements OnInit {
  @Input() listSize = 8;
  @Input() listSizeMobile = 2;
  @Input() buttonTemplate!: TemplateRef<unknown>;
  @Input() home = false;

  @Output() searchChange = new EventEmitter<State<ParceiroState>>();

  public isLoading = false;
  public isError = false;
  public totalRecords!: number;
  public parceiros: RedeCompartilhe[] = [];
  public queryParams: ParceirosParams = { page: 1 };

  public especialidadeOptions: SelectOption<ParceiroEspecialidade>[] = [];
  public estabelecimentoOptions: SelectOption<Partial<Parceiro>>[] = [];
  public cidades: AutocompleteItem<number>[] = [];

  public cidadePreSelected?: AutocompleteItem<Cidade>;

  public header!: string;

  protected isBrowser = false;

  public buscaForm = this.fb.group<Form<NossosParceirosFiltro>>({
    cidade: this.fb.control<Cidade | null>(null),
    especialidade: this.fb.control<ParceiroEspecialidade | null>(null),
    parceiro: this.fb.control<Parceiro | null>(null),
    tipoEstabelecimento: this.fb.control<ParceiroSubcategoria | null>(null),
  });

  get controlCidade() {
    return this.buscaForm.get('cidade');
  }

  get controlEspecialidade() {
    return this.buscaForm.get('especialidade');
  }

  get controlEstabelecimento() {
    return this.buscaForm.get('parceiro');
  }

  get controlTipoEstabelecimento() {
    return this.buscaForm.get('tipoEstabelecimento');
  }

  constructor(
    private parceirosService: ParceirosService,
    private fb: FormBuilder,
    protected location: Location,
    private navigation: NavigationService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {
    this.setFilterValues();
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);

    if (this.isBrowser) {
      const width = window.innerWidth;

      if (width <= MOBILE_WIDTH_SIZE) {
        this.header = 'Rede compartilhe';
        this.queryParams.pageSize = this.listSizeMobile;
      } else {
        this.header = 'Conheça quem faz parte da rede Compartilhe Saúde';
        this.queryParams.pageSize = this.listSize;
      }
    }

    if (!this.controlCidade?.value) this.getParceiros(this.queryParams);

    this.setFilterValues();
    this.loadEspecialidadeOptions();
    this.loadTipoEstabelecimentoOptions();
  }

  setFilterValues() {
    const routePath = ['/nossos-parceiros'];

    this.navigation.state$.subscribe((state: State<ParceiroState> | null) => {

      if (state) {
        const { cidade, especialidade, tipoEstabelecimento } = state;

        if (cidade) {
          this.cidadePreSelected = {
            itemLabel: cidade?.nome ?? '',
            value: {
              id: cidade.id,
              nome: cidade.nome,
              siglaUf: cidade.siglaUf,
            },
          };

          this.queryParams.idCidade = cidade.id;
          this.controlCidade?.setValue(cidade);
          routePath.push(parseToUrl(cidade.nome));
        }

        if (especialidade) {
          this.queryParams.idEspecialidade = especialidade.id;
          this.controlEspecialidade?.setValue(especialidade);
          routePath.push(parseToUrl(especialidade.descricao));
        }

        if (tipoEstabelecimento) {
          this.queryParams.idTipoEstabelecimento = tipoEstabelecimento.id ?? undefined;
          this.controlTipoEstabelecimento?.setValue(tipoEstabelecimento);
          routePath.push(parseToUrl(tipoEstabelecimento.descricao));
        }

        if (this.location.isCurrentPathEqualTo('/nossos-parceiros')) {
          this.location.go(routePath.join('/'));
        }

        this.navigation.clearState();
      }
    });
    const params = filterParams(this.buscaForm.getRawValue());
    if (this.location.path().split('/').includes('nossos-parceiros')
      && Object.keys(params).length === 0) {
      this.location.go(routePath.join('/'));
    }
  }

  loadEspecialidadeOptions(): void {
    this.parceirosService
      .listarSubcategorias([CategoriaParceiroEnum.PROFISSIONAL_SAUDE], true)
      .subscribe({
        next: (response) => {
          this.especialidadeOptions = response.map((subcategoria) => ({
            label: subcategoria.descricao,
            value: {
              id: subcategoria.id,
              descricao: subcategoria.descricao,
            },
          }));
        },
        error: () => this.isError = true,
      });
  }

  loadTipoEstabelecimentoOptions(): void {
    this.parceirosService
      .listarSubcategorias([CategoriaParceiroEnum.ESTABELECIMENTO], true)
      .subscribe({
        next: (response) => {
          this.estabelecimentoOptions = response.map((subcategoria) => ({
            label: subcategoria.descricao,
            value: {
              id: subcategoria.id,
              descricao: subcategoria.descricao,
            },
          }));
        },
        error: () => this.isError = true,
      });
  }

  getParceiros(params: ParceirosParams): void {
    this.isLoading = true;

    this.parceirosService.listarParceiros(params).subscribe({
      next: (response: PaginatedContent<RedeCompartilhe>) => {
        this.isError = false;
        this.parceiros.push(...response.data);
        this.totalRecords = response.metadata.numRecords;
      },
      error: () => {
        this.isError = true;
      },
    }).add(() => (this.isLoading = false));
  }

  searchParceiros(): void {
    const cidadeValue = this.controlCidade?.value;
    const especialidadeValue = this.controlEspecialidade?.value;
    const tipoEstabelecimentoValue = this.controlTipoEstabelecimento?.value;

    this.parceiros = [];
    this.queryParams = { page: 1, pageSize: this.queryParams.pageSize };

    const parceirosState = {} as ParceiroState;
    const routePath = ['/nossos-parceiros'];

    if (cidadeValue) {
      parceirosState.cidade = cidadeValue;
      this.queryParams.idCidade = cidadeValue.id;
      routePath.push(parseToUrl(cidadeValue.nome));
    }

    if (especialidadeValue) {
      parceirosState.especialidade = especialidadeValue;
      this.queryParams.idEspecialidade = especialidadeValue.id;
      routePath.push(parseToUrl(especialidadeValue.descricao));
    }

    if (tipoEstabelecimentoValue) {
      parceirosState.tipoEstabelecimento = tipoEstabelecimentoValue;
      this.queryParams.idTipoEstabelecimento = tipoEstabelecimentoValue.id ?? undefined;
      routePath.push(parseToUrl(tipoEstabelecimentoValue.descricao) ?? undefined);
    }

    this.location.go(routePath.join('/'));

    this.getParceiros(this.queryParams);
    this.searchChange.emit(parceirosState);
  }

  resetFilter(): void {
    this.buscaForm.reset();
    this.searchParceiros();
  }
}
