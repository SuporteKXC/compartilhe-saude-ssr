import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectOption, selectOptionsFromEnum } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { ModalidadePessoaFisicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-fisica.enum';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { FormFiltroClientesCompartilheService } from '../../services/form-filtro-clientes-compartilhe/form-filtro-clientes-compartilhe.service';
import { EstadoCivil } from 'src/app/modules/shared/enums/estado-civil.enum';
import { UF } from 'src/app/modules/shared/enums/uf.enum';
import { SexoBiologico } from 'src/app/modules/shared/enums/sexo-biologico.enum';
import { ModalidadePessoaJuridicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-juridica.enum';
import { FaixaEtaria } from 'src/app/modules/admin/models/faixa-etaria.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-filtro-clientes-compartilhe',
  templateUrl: './filtro-clientes-compartilhe.component.html',
  styleUrls: ['./filtro-clientes-compartilhe.component.scss']
})
export class FiltroClientesCompartilheComponent implements OnInit {
  @Output() shouldSearchAgain = new EventEmitter<void>();

  protected tipoClienteOptions: SelectOption<string>[] = selectOptionsFromEnum(TipoClienteEnum);
  protected estadoOptions: SelectOption<string>[] = selectOptionsFromEnum(UF);
  protected estadoCivilOptions: SelectOption<string>[] = selectOptionsFromEnum(EstadoCivil);
  protected sexoBiologicoOptions: SelectOption<string>[] = [
    { label: 'Feminino', value: SexoBiologico.F },
    { label: 'Masculino', value: SexoBiologico.M },
  ];
  protected faixaEtariaOptions!: SelectOption<FaixaEtaria>[];

  protected modalidadeOptions: SelectOption<string>[] = this.formService.isPessoaJuridica
    ? selectOptionsFromEnum(ModalidadePessoaJuridicaEnum)
    : selectOptionsFromEnum(ModalidadePessoaFisicaEnum);

  constructor(
    protected formService: FormFiltroClientesCompartilheService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.faixaEtariaOptions = [
      {
        label: "Abaixo de 5 anos",
        value: { base: 0, limite: 5}
      },
      {
        label: '6 à 10 anos',
        value: { base: 6, limite: 10}
      },
      {
        label: '11 à 15 anos',
        value: { base: 11, limite: 15}
      },
      {
        label: '16 à 20 anos',
        value: { base: 16, limite: 20}
      },
      {
        label: '21 à 30 anos',
        value: { base: 21, limite: 30}
      },
      {
        label: '31 à 40 anos',
        value: { base: 31, limite: 40}
      },
      {
        label: '41 à 60 anos',
        value: { base: 41, limite: 60}
      },
      {
        label: 'Acima de 60 anos',
        value: { base: 61, limite: 150}
      },
    ];

    this.setModalidade();
    this.updateCidadeState();

    this.formService.filtro.get('tipoCliente')?.valueChanges.subscribe((value) => {
      if (value) {
        this.formService.reset();
        this.setModalidade();
        this.formService.filtro.get('cidade')?.enable();
      } else {
        this.formService.filtro.get('cidade')?.disable();
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateCidadeState();
      }
    });

    this.cdr.detectChanges();
  }

  private updateCidadeState() {
    const tipoCliente = this.formService.filtro.getRawValue().tipoCliente;
    if (tipoCliente) {
      this.formService.filtro.get('cidade')?.enable();
    } else {
      this.formService.filtro.get('cidade')?.disable();
    }
  }

  get textoPlaceholder(): string {
    const tipoCliente = this.formService.filtro.getRawValue().tipoCliente;
    if (tipoCliente) {
      return this.formService.isPessoaJuridica
        ? 'Digite o nome ou CNPJ'
        : 'Digite o nome ou CPF';
    }
    return 'Digite o nome ou CPF';
  }

  setModalidade() {
    if (this.formService.isPessoaJuridica) {
      this.modalidadeOptions = selectOptionsFromEnum(ModalidadePessoaJuridicaEnum);
    } else {
      this.modalidadeOptions = selectOptionsFromEnum(ModalidadePessoaFisicaEnum);
    }
  }
}
