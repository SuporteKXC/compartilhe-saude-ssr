import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { PedidoFiltro } from '../../models/pedido-filtro.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { Pedido } from 'src/app/modules/shared/models/pedido/pedido.model';

@Injectable({
    providedIn: 'root',
})
export class PedidoAdmService {
    constructor(private http: HttpClient) { }

    public listarPedidosAdmin(
        params: PageableParams,
        filtro: PedidoFiltro
    ): Observable<PaginatedContent<Pedido>> {
        return this.http.post<PaginatedContent<Pedido>>('pedidos/adm/listar', filtro, {
            params: { ...params },
            context: new HttpContext().set(AUTHENTICATED, true),
        });
    }
}
