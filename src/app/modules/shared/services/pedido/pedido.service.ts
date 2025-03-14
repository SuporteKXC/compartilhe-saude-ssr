import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATED, MAX_RETRIES, SKIP_400_ERROR_MODAL } from 'src/app/core/interceptors/context/context';
import { DetalhesPedido } from 'src/app/modules/shared/models/pedido/detalhes-pedido.model';
import { PedidoCriacao } from '../../../pagamento/models/pedido-criacao.model';
import { FormaPagamento } from '../../../pagamento/enums/forma-pagamento';
import { PedidoDetalhePix } from '../../../pagamento/models/pedido-detalhe-pix.model';
import { Pedido } from 'src/app/modules/shared/models/pedido/pedido.model';
import { PaginatedContent } from '../../models/paginacao/paginated-content.model';
import { PageableParams } from '../../models/paginacao/pageable-params.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  obterPedido(id: number): Observable<DetalhesPedido> {
    return this.http.get<DetalhesPedido>(`pedidos/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarMeusPedidos(params: PageableParams): Observable<PaginatedContent<Pedido>> {
    return this.http.get<PaginatedContent<Pedido>>('pedidos', {
      params: { ...params },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  public salvarPedido(pedido: PedidoCriacao): Observable<number> {
    const context = new HttpContext();
    context.set(AUTHENTICATED, true);
    context.set(MAX_RETRIES, 0);

    if (pedido.formaPagamento === FormaPagamento.CARTAO_CREDITO)
      context.set(SKIP_400_ERROR_MODAL, true);

    return this.http.post<number>('pedidos', pedido, {
      context,
    });
  }

  public getDadosPedidoPix(idPedido: number): Observable<PedidoDetalhePix> {
    return this.http.get<PedidoDetalhePix>(`pedidos/${idPedido}/pix`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  public verificaPagamentoPix(idPedido: number): Observable<boolean> {
    return this.http.put<boolean>(`pedidos/${idPedido}/pix`, null, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }
}
