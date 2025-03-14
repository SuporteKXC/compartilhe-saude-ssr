import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { FormFiltroGestaoParceiroService } from '../../services/form-filtro-gestao-parceiro/form-filtro-gestao-parceiro.service';
import { CategoriaParceiroEnum } from '../../enums/categoria-parceiro.enum';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';

@Component({
  selector: 'app-filtros-parceiros',
  templateUrl: './filtros-parceiros.component.html',
  styleUrls: ['./filtros-parceiros.component.scss'],
})
export class FiltrosParceirosComponent implements OnInit {
  @Output() shouldSearchAgain = new EventEmitter<void>();

  public get formFiltro() {
    return this.formFiltroGestaoParceiro.group;
  }

  public subcategoriaOptions: SelectOption<string>[] = [];
  public categoriaOptions: SelectOption<string>[] = [
    { label: 'Estabelecimento', value: CategoriaParceiroEnum.ESTABELECIMENTO },
    { label: 'Profissional de saúde', value: CategoriaParceiroEnum.PROFISSIONAL_SAUDE },
  ];
  public situacaoOptions: SelectOption<boolean>[] = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false },
  ];

  constructor(
    private formFiltroGestaoParceiro: FormFiltroGestaoParceiroService,
    private parceiroService: ParceirosService
  ) { }

  ngOnInit(): void {
    this.fetchSelectOptions();
  }

  private fetchSelectOptions(): void {
    this.parceiroService.listarSubcategorias(this.formFiltroGestaoParceiro.parsedData.categoria).subscribe(subcategorias => {
      this.subcategoriaOptions = subcategorias.map(subcategoria => ({
        label: subcategoria.descricao,
        value: subcategoria.descricao
      }));
    });
  }

  handleCategoriaFilter() {
    this.formFiltroGestaoParceiro.clearSubcategoria();
    this.shouldSearchAgain.emit();
    this.fetchSelectOptions();
  }
}
