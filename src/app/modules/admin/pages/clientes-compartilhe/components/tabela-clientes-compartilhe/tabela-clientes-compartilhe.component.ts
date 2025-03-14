import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { TableComponent } from 'src/app/modules/shared/components/layout/table/table.component';
import { FormFiltroClientesCompartilheService } from '../../services/form-filtro-clientes-compartilhe/form-filtro-clientes-compartilhe.service';
import { TipoClienteEnum } from 'src/app/modules/shared/enums/tipo-cliente.enum';
import { PessoaFisicaService } from 'src/app/modules/admin/services/pessoa-adm/pessoa-fisica/pessoa-fisica.service';
import { PessoaJuridicaService } from 'src/app/modules/admin/services/pessoa-adm/pessoa-juridica/pessoa-juridica.service';
import { ModalidadePessoaFisicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-fisica.enum';
import { Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { ModalidadePessoaJuridicaEnum } from 'src/app/modules/shared/enums/modalidade-pessoa-juridica.enum';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';

@Component({
  selector: 'app-tabela-clientes-compartilhe',
  templateUrl: './tabela-clientes-compartilhe.component.html',
  styleUrls: ['./tabela-clientes-compartilhe.component.scss']
})
export class TabelaClientesCompartilheComponent implements OnInit {
  @ViewChild('table', { static: true }) table?: TableComponent;

  @Input({ required: true }) shouldSearchAgain$!: Subject<void>;

  protected page = 1;
  protected pageSize = 8;
  protected isLoading = false;
  protected isError = false;
  protected totalClientes!: number;

  protected tipoCliente!: TipoClienteEnum;
  protected isPessoaJuridica!: boolean;

  protected clientes!: unknown[];

  constructor(
    protected formService: FormFiltroClientesCompartilheService,
    private pessoaFisicaService: PessoaFisicaService,
    private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shouldSearchAgain$.subscribe(() => {
      this.isPessoaJuridica = this.formService.isPessoaJuridica;
      this.resetTable();
      this.getClientes();
      this.tipoCliente = this.formService.filtro.getRawValue().tipoCliente as TipoClienteEnum;
    });
  }

  getClientes() {
    this.isLoading = true;
    
    if (this.isPessoaJuridica) {
      const filtro = this.formService.pessoaJuridicaValues;
      this.pessoaJuridicaService.listar(
        { page: this.page, pageSize: this.pageSize },
        filtro
      ).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.clientes.push(...response.data);
          this.totalClientes = response.metadata.numRecords;
        },
        error: () => (this.isError = true)
      });
    } else {
      const filtro = this.formService.pessoaFisicaValues;
      this.pessoaFisicaService.listar(
        { page: this.page, pageSize: this.pageSize },
        filtro
      ).subscribe({
        next: (response) => {
          this.isLoading = false;
          (this.clientes).push(...response.data);
          this.totalClientes = response.metadata.numRecords;
        },
        error: () => (this.isError = true)
      });
    }
  }

  navigateToEdicaoCliente(id: number) {
    const path = 'admin/dashboard/clientes-compartilhe';
    
    this.router.navigate([
      path,
      id,
      parseToUrl(this.tipoCliente).replace("_", "-"),
      'editar'
    ]);
  }

  getModalidade(modalidade: string) {
    if (this.isPessoaJuridica) {
      return ModalidadePessoaJuridicaEnum[modalidade as keyof typeof ModalidadePessoaJuridicaEnum];
    }
    return ModalidadePessoaFisicaEnum[modalidade as keyof typeof ModalidadePessoaFisicaEnum];
  }

  getEndereco(endereco: Endereco): string {
    return endereco.cidade ? `${endereco.cidade?.nome} - ${endereco.cidade?.siglaUf}`: 'Não informado';
  }

  resetTable() {
    this.clientes = [];
    this.page = 1;
    this.table?.resetTable();
  }
}
