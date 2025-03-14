import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultasEExamesDetalhesFiltro } from 'src/app/modules/content/models/consultas-e-exames-filtro.model';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { ParceiroPreco } from 'src/app/modules/content/models/parceiro-preco.model';
import { NavigationEnd, Router } from '@angular/router';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { MOBILE_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { AutocompleteItem } from 'src/app/modules/shared/components/form/autocomplete/models/autocomplete-item.model';
import { enumNameFromEnumValue } from 'src/app/modules/shared/functions/util/enum-name-from-enum-value';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { Form } from 'src/app/modules/shared/interfaces/form';
import { hasNonNullValues } from 'src/app/modules/shared/functions/util/has-non-null-values.function';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { CarrinhoItem } from 'src/app/modules/carrinho/models/carrinho-item.model';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-secao-detalhes-produto',
  templateUrl: './secao-detalhes-produto.component.html',
  styleUrls: ['./secao-detalhes-produto.component.scss']
})
export class SecaoDetalhesProdutoComponent implements OnInit, OnChanges {
  @Input() detalhesProduto!: DetalhesProduto | undefined;
  @Input() parentLoading!: boolean;
  @Input() parentError!: boolean;
  @Input() idProduto!: number;

  public formFiltro = this.fb.group<Form<ConsultasEExamesDetalhesFiltro>>({
    cidade: this.fb.nonNullable.control<Cidade | null>(null),
    idParceiro: this.fb.nonNullable.control<number | null>(null),
    formaAtendimento: this.fb.nonNullable.control<FormaAtendimentoEnum | null>(null),
  });

  protected queryParams: PageableParams = { page: 1 };
  protected mobileSize = 4;
  protected size = 8;

  protected produtosPreco: ParceiroPreco[] = [];
  protected isLoading = false;
  protected isError = false;
  protected total!: number;

  protected cidadePreSelected!: AutocompleteItem<Cidade>;
  protected parceiroNomeOptions: SelectOption<number>[] = [];
  protected formaAtendimentoOptions: SelectOption<FormaAtendimentoEnum>[] = [];

  protected isFilteredRequest = false;
  protected isFirstRequest = true;

  constructor(
    private fb: FormBuilder,
    private parceirosService: ParceirosService,
    private produtosService: ProdutosService,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private navigation: NavigationService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {
    this.navigation.state$.subscribe((state: State<ProdutoState> | null) => {
        if (state) {
          const { cidade, idParceiro } = state;

          if (cidade) {
            this.cidadePreSelected = {
              itemLabel: cidade.nome ?? '',
              value: {
                id: cidade.id,
                nome: cidade.nome,
                siglaUf: cidade.siglaUf,
              }
            };
            this.formFiltro.patchValue({ cidade: { id: cidade.id } });
          }

          if (idParceiro) {
            this.formFiltro.patchValue({ idParceiro: idParceiro });
          }

          if (hasNonNullValues(this.formFiltro.getRawValue())) {
            this.isFilteredRequest = true;
          }
          navigation.clearState();
        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.populaFormaAtendimentoOptions();
    this.populaParceiroNomeOptions();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.formFiltro.reset();
      }
    });

    if (isPlatformBrowser(this.plataformId)) {
      this.setFilterValues();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idProduto']) {
      if (isPlatformBrowser(this.plataformId)) {
        this.setFilterValues();
        
        this.isFirstRequest = true;
        if (!this.isFilteredRequest) {
          this.formFiltro.reset();
        }
  
        this.searchProdutosPreco();
      }
    }
  }

  getProdutosPreco() {
    const filtros: ConsultasEExamesDetalhesFiltro = this.formFiltro.getRawValue();

    this.isLoading = true;

    this.produtosService
      .listarProdutosPrecos(this.queryParams, this.idProduto, filtros)
      .subscribe({
        next: (response) => {
          this.isError = false;
          this.produtosPreco.push(...response.data);
          this.total = response.metadata.numRecords;
          this.isFirstRequest = false;
        },
        error: () => {
          this.isError = true;
        }
      }).add(() => this.isLoading = false);
  }

  populaParceiroNomeOptions() {
    this.parceirosService.listarParceiroNomes(true).subscribe((response) => {
      this.parceiroNomeOptions = response.map((parceiro) => ({
        label: parceiro.nome,
        value: parceiro.id,
      }));
    });
  }

  populaFormaAtendimentoOptions() {
    this.parceirosService.listarFormasAtendimento(true).subscribe((response) => {
      this.formaAtendimentoOptions = response.map((formaAtendimento) => ({
        label: formaAtendimento.descricao,
        value: enumNameFromEnumValue(
          FormaAtendimentoEnum,
          formaAtendimento.descricao as FormaAtendimentoEnum
        ) as FormaAtendimentoEnum
      }));
    });
  }

  searchCidade() {
    if (!this.isFirstRequest) {
      this.searchProdutosPreco();
    }
  }

  searchProdutosPreco() {
    const windowWidth = window.innerWidth;
    this.queryParams.pageSize = windowWidth <= MOBILE_WIDTH_SIZE ? this.mobileSize : this.size;
    this.queryParams.page = 1;

    this.produtosPreco = [];
    this.getProdutosPreco();
    this.isFilteredRequest = false;
  }

  adicionarItemCarrinho(event: number) {
    const localProduto = this.detalhesProduto?.locais.find(local => local.id === event);

    if (this.detalhesProduto && localProduto) {
      const novoItemCarrinho: CarrinhoItem = {
        id: null,
        idProduto: this.detalhesProduto.id,
        nome: this.detalhesProduto.nome,
        descricao: this.detalhesProduto.descricao,
        localProduto: localProduto,
        pathImagem: this.detalhesProduto.pathImagem,
        quantidade: 1,
      };

      this.carrinhoService.addToCarrinho(novoItemCarrinho).subscribe(
        () => this.router.navigate(['carrinho'])
      );
    }
  }

  setFilterValues() {
    this.navigation.state$.subscribe((state: State<ProdutoState> | null) => {
      if (state) {
        const { cidade, formaAtendimento, idParceiro } = state;

        if (cidade) {
          this.cidadePreSelected = {
            itemLabel: cidade.nome ?? '',
            value: {
              id: cidade.id,
              nome: cidade.nome,
              siglaUf: cidade.siglaUf,
            }
          };
          this.formFiltro.patchValue({ cidade: { id: cidade.id } });
        }

        if (formaAtendimento) {
          this.formFiltro.patchValue({ formaAtendimento: state.formaAtendimento });
        }

        if (idParceiro) {
          this.formFiltro.patchValue({ idParceiro: idParceiro });
        }

        if (hasNonNullValues(this.formFiltro.getRawValue())) {
          this.isFilteredRequest = true;
        }
        this.navigation.clearState();
      }
    });
  }
}
