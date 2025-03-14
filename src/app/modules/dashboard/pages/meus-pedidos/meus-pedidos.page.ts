import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { Pedido } from '../../../shared/models/pedido/pedido.model';
import { PedidoService } from 'src/app/modules/shared/services/pedido/pedido.service';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage implements OnInit {
  pedidos: Pedido[] = [];
  isLoading = false;
  isError = false;
  totalRecords = 0;

  queryParams: PageableParams = { page: 1, pageSize: 4 };

  constructor(private router: Router, private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos(this.queryParams);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  getPedidos(params: PageableParams) {
    this.isLoading = true;
    this.pedidoService.listarMeusPedidos(params).subscribe({
      next: (response: PaginatedContent<Pedido>) => {
        this.isError = false;

        this.pedidos.push(...response.data);
        this.totalRecords = response.metadata.numRecords;
      },
      error: () => {
        this.isError = true;
      },
    }).add(() => this.isLoading = false);
  }
}
