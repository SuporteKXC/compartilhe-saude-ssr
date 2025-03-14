import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { CategoriaProduto } from '../../enums/CategoriaProduto';
import { FormFiltroGestaoProdutosService } from '../../services/form-filtro-gestao-produtos/form-filtro-gestao-produtos.service';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-filtros-produtos',
  templateUrl: './filtros-produtos.component.html',
  styleUrls: ['./filtros-produtos.component.scss']
})
export class FiltrosProdutosComponent implements OnInit {
  @Output() shouldSearchAgain = new EventEmitter<void>();

  public subcategoriaOptions: SelectOption<string>[] = [];
  public categoriaOptions: SelectOption<string>[] = selectOptionsFromEnum(CategoriaProduto);
  public situacaoOptions: SelectOption<boolean>[] = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false },
  ];

  constructor(
    protected formFiltroGestaoProduto: FormFiltroGestaoProdutosService,
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.fetchSelectOptions();
  }

  private fetchSelectOptions(): void {
    const categoria = this.formFiltroGestaoProduto.parsedData.categoria;

    this.produtosService.listarSubcategorias(categoria).subscribe(subcategorias => {
      this.subcategoriaOptions = subcategorias.map(subcategoria => ({
        label: subcategoria.descricao,
        value: subcategoria.descricao
      }));
    });
  }

  handleCategoriaFilter() {
    this.formFiltroGestaoProduto.clearSubcategoria();
    this.shouldSearchAgain.emit();
    this.fetchSelectOptions();
  }
}
