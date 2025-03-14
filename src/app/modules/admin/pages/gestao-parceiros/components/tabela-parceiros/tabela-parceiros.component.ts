import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TableComponent } from 'src/app/modules/shared/components/layout/table/table.component';
import { FormFiltroGestaoParceiroService } from '../../services/form-filtro-gestao-parceiro/form-filtro-gestao-parceiro.service';
import { ParceiroResumo } from 'src/app/modules/shared/models/parceiro/parceiro-resumo.model';
import { ParceirosAdmService } from 'src/app/modules/admin/services/parceiros-adm/parceiros-adm.service';

@Component({
  selector: 'app-tabela-parceiros',
  templateUrl: './tabela-parceiros.component.html',
  styleUrls: ['./tabela-parceiros.component.scss'],
})
export class TabelaParceirosComponent implements OnInit {
  @Input() shouldSearchAgain$!: Subject<void>;

  @ViewChild('table', { static: true }) table?: TableComponent;

  protected page = 1;
  protected pageSize = 15;

  public isLoading = false;

  public parceiros: ParceiroResumo[] = [];
  public totalParceiros = 0;

  constructor(
    private router: Router,
    private formFiltroGestaoParceiro: FormFiltroGestaoParceiroService,
    private parceiroAdmService: ParceirosAdmService,
  ) {}

  ngOnInit(): void {
    this.shouldSearchAgain$.subscribe(() => {
      this.totalParceiros = 0;
      this.parceiros = [];

      this.table?.resetTable();

      this.getPageParceiros();
    });

    this.getPageParceiros();
  }

  getPageParceiros() {
    this.isLoading = true;
    this.parceiroAdmService
      .listarParceirosAdmin(
        { page: this.page, pageSize: this.pageSize },
        this.formFiltroGestaoParceiro.parsedData
      )
      .subscribe((parceiros) => {
        this.parceiros = this.parceiros.concat(parceiros.data);
        this.totalParceiros = parceiros.metadata.numRecords;
      })
      .add(() => (this.isLoading = false));
  }

  navigateToEdicaoParceiro(id: number, categoria: string) {
    this.router.navigate([
      '/',
      'admin',
      'dashboard',
      'rede-compartilhe',
      id,
      categoria === 'Estabelecimento' ? 'estabelecimento' : 'profissional',
      'editar',
    ]);
  }
}
