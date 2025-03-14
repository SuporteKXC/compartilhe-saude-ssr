import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoResumo } from '../../pages/gestao-produtos/models/produto-resumo.model';
import { ProdutoFiltro } from '../../pages/gestao-produtos/models/produto-filtro.model';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { ProdutoAdmin } from '../../models/produto-admin.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosAdmService {
  constructor(private http: HttpClient) { }

  listarProdutosAdm(params: PageableParams, filtros: ProdutoFiltro): Observable<PaginatedContent<ProdutoResumo>> {
    return this.http.post<PaginatedContent<ProdutoResumo>>('produtos/adm/listar', filtros, {
      params: { ...params },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  obterProduto(id: number): Observable<ProdutoAdmin> {
    return this.http.get<ProdutoAdmin>(`produtos/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  cadastrarProduto(produto: ProdutoAdmin): Observable<ProdutoAdmin> {
    return this.http.post<ProdutoAdmin>('produtos/adm', produto, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  alterarProduto(id: number, produto: ProdutoAdmin): Observable<number> {
    return this.http.put<number>(`produtos/adm/${id}`, produto, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }
}
