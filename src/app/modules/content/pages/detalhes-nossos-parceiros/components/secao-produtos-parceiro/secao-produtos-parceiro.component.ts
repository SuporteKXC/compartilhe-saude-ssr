
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { ProdutoFiltro } from 'src/app/modules/content/models/pacote-filtro.model';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { MOBILE_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { Cidade } from 'src/app/modules/shared/models/endereco/cidade.model';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';
import { State } from 'src/app/modules/shared/services/navigation/models/state.type';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-secao-produtos-parceiro',
  templateUrl: './secao-produtos-parceiro.component.html',
  styleUrls: ['./secao-produtos-parceiro.component.scss']
})
export class SecaoProdutosParceiroComponent implements OnInit, OnChanges {
  @Input() idParceiro!: number | null;
  @Input() idCidade!: number | null;
  @Input() formaAtendimento!: FormaAtendimentoEnum | null;
  @Input() detalhesParceiro!: RedeCompartilhe;

  private cidade!: Cidade;

  protected size = 4;
  protected mobileSize = 2;
  protected queryParams: PageableParams = { page: 1 };

  protected isLoading = false;
  protected isError = false;

  protected produtos: Produto[] = [];
  protected total!: number;
  protected filtroForm: FormGroup;

  public categoriaOptions: SelectOption<string>[] = selectOptionsFromEnum(CategoriaProduto);

  protected isBrowser = false;

  constructor(
    private produtosService: ProdutosService, 
    private window: WindowService,
    @Inject(PLATFORM_ID) private plataformId: string
  ) {
    this.filtroForm = new FormGroup({
      categoria: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.plataformId);

    if (this.isBrowser) {
      const width = window.innerWidth;

      if (width <= MOBILE_WIDTH_SIZE) {
        this.queryParams.pageSize = this.mobileSize;
      } else {
        this.queryParams.pageSize = this.size;
      }
    }

    this.getCategorias().subscribe({
      next: (categorias: CategoriaProduto[]) => {
        this.categoriaOptions = categorias
          .map((categoria) => ({
            label: CategoriaProduto[categoria as unknown as keyof typeof CategoriaProduto],
            value: categoria
          }));
      },
      complete: () => {
        if (this.isCategoriaUnica) {
          this.filtroForm.patchValue({ categoria: this.categoriaOptions[0].value });
        }
      },
      error: () => {
        this.isError = true;
      }
    }).add(() => this.getProdutos());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['detalhesParceiro']?.currentValue && this.idCidade) {
      this.cidade = {
        id: Number(this.idCidade) ?? undefined,
        nome: this.detalhesParceiro.endereco.cidade?.nome,
        siglaUf: this.detalhesParceiro.endereco.cidade?.siglaUf
      };
    }
  }

  getCategorias() {
    const filtro: ProdutoFiltro = {
      idParceiro: this.idParceiro,
      idCidade: this.idCidade,
    };

    return this.produtosService.listarCategorias(filtro);
  }

  getProdutos() {
    this.isLoading = true;

    const filtro: ProdutoFiltro = {
      idParceiro: this.idParceiro,
      idCidade: this.idCidade,
    };

    if (this.filtroForm.getRawValue().categoria) {
      const categoria = this.filtroForm.getRawValue().categoria;
      filtro.categoria = [categoria];
    }

    if (this.formaAtendimento) {
      filtro.formaAtendimento = this.formaAtendimento.toUpperCase() as FormaAtendimentoEnum;
    }

    this.produtosService.listarProdutos(this.queryParams, filtro).subscribe({
      next: (response) => {
        this.isError = false;
        this.produtos.push(...response.data);
        this.total = response.metadata.numRecords;
      },
      error: () => {
        this.isError = true;
      }
    }).add(() => (this.isLoading = false));
  }

  handleCategoriaFilter() {
    this.produtos = [];
    this.queryParams.page = 1;
    this.getProdutos();
  }

  get state(): State<ProdutoState> {
    return { idParceiro: this.idParceiro, formaAtendimento: this.formaAtendimento };
  }

  get isCategoriaUnica() {
    return this.categoriaOptions.length === 1;
  }
}
