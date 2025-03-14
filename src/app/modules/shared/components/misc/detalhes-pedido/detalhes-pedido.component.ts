import { Component, OnInit } from '@angular/core';
import { DetalhesPedido } from '../../../models/pedido/detalhes-pedido.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/modules/shared/services/pedido/pedido.service';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.scss'],
})
export class DetalhesPedidoComponent implements OnInit {
  detalhesPagamento$!: Observable<DetalhesPedido>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      if (id) {
        this.detalhesPagamento$ = this.pedidoService.obterPedido(id);
      }
    });
  }
}
