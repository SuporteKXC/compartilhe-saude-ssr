import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StatusPedido } from 'src/app/modules/pagamento/enums/status-pedido';
import { Pedido } from 'src/app/modules/shared/models/pedido/pedido.model';
import { FormFiltroGestaoPedidoService } from '../../services/form-filtro-gestao-pedido/form-filtro-gestao-pedido.service';
import { TableComponent } from 'src/app/modules/shared/components/layout/table/table.component';
import { PedidoAdmService } from '../../services/pedidos-adm/pedidos-adm.service';

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls: ['./tabela-pedidos.component.scss'],
})
export class TabelaPedidosComponent implements OnInit {
  @Input() shouldSearchAgain$!: Subject<void>;

  @ViewChild('table', { static: true }) table?: TableComponent;

  protected StatusPedido = StatusPedido;
  protected page = 1;
  protected pageSize = 15;

  public isLoading = false;

  public pedidos: Pedido[] = [];
  public totalPedidos = 0;

  constructor(
    private router: Router,
    private pedidoAdmService: PedidoAdmService,
    private formFiltroGestaoPedidoService: FormFiltroGestaoPedidoService
  ) {}

  ngOnInit(): void {
    this.shouldSearchAgain$.subscribe(() => {
      this.totalPedidos = 0;
      this.pedidos = [];

      this.table?.resetTable();

      this.getPagePedidos();
    });

    this.getPagePedidos();
  }

  getPagePedidos() {
    this.isLoading = true;
    this.pedidoAdmService
      .listarPedidosAdmin(
        { page: this.page, pageSize: this.pageSize },
        this.formFiltroGestaoPedidoService.parsedData
      )
      .subscribe((pedidos) => {
        this.pedidos = this.pedidos.concat(pedidos.data);
        this.totalPedidos = pedidos.metadata.numRecords;
      })
      .add(() => (this.isLoading = false));
  }

  navigateToDetalhesPedido(id: number) {
    this.router.navigate(['/', 'admin', 'dashboard', 'gestao-pedidos', 'detalhes-pedido', id]);
  }
}
