import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SKIP_ERROR_MODAL } from 'src/app/core/interceptors/context/context';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { ProdutoSubcategoria } from 'src/app/modules/admin/models/produto-subcategoria.model';
import { PageableParams } from '../../models/paginacao/pageable-params.model';
import { ProdutoFiltro } from 'src/app/modules/content/models/pacote-filtro.model';
import { ConsultasEExamesDetalhesFiltro } from 'src/app/modules/content/models/consultas-e-exames-filtro.model';
import { ParceiroPreco } from 'src/app/modules/content/models/parceiro-preco.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private http: HttpClient) { }

  listarProdutos(params: PageableParams, filtros: ProdutoFiltro = {}): Observable<PaginatedContent<Produto>> {
    return this.http.post<PaginatedContent<Produto>>('publico/produtos', filtros, {
      params: { ...params },
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

  listarProdutosPrecos(
    params: PageableParams,
    id: number,
    filtros: ConsultasEExamesDetalhesFiltro
  ): Observable<PaginatedContent<ParceiroPreco>> {
    return this.http.post<PaginatedContent<ParceiroPreco>>(`publico/produtos/${id}/precos`, filtros, {
      params: { ...params },
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

  obterProduto(id: number, skipErrorModal = false): Observable<DetalhesProduto> {
    return this.http.get<DetalhesProduto>(`publico/produtos/${id}`, {
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    });
  }

  listarSubcategorias(categorias: CategoriaProduto[] | null): Observable<ProdutoSubcategoria[]> {
    let queryParams = {};
    if (categorias) queryParams = { categorias };
    return this.http.get<ProdutoSubcategoria[]>('publico/produtos/subcategorias', {
      params: { ...queryParams },
    });
  }

  listarProdutosResumo(params: PageableParams, filtros?: { nome?: string, destaque?: boolean }): Observable<Produto[]> {
    return this.http.get<Produto[]>('publico/produtos', {
      params: { ...params, ...filtros },
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

  listarProdutosInteresse(params: PageableParams, listaIdProduto: number[]): Observable<PaginatedContent<Produto>> {
    return this.http.post<PaginatedContent<Produto>>('publico/produtos/interesse', {
      listaIdProduto: listaIdProduto
    }, {
      params: { ...params },
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

  listarCategorias(filtro: ProdutoFiltro): Observable<CategoriaProduto[]> {
    return this.http.post<CategoriaProduto[]>('publico/produtos/categorias', filtro, {
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

}
