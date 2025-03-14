import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParceiroFiltro } from 'src/app/modules/admin/pages/gestao-parceiros/models/parceiro-filtro.model';
import { ParceirosParams } from 'src/app/modules/content/models/parceiros-params.model';
import { PaginatedContent } from '../../../shared/models/paginacao/paginated-content.model';
import { ParceiroResumo } from '../../../shared/models/parceiro/parceiro-resumo.model';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { ParceiroEstabelecimento } from 'src/app/modules/admin/models/parceiro-estabelecimento.model';
import { ParceiroProfissional } from 'src/app/modules/admin/models/parceiro-profissional.model';
import { Parceiro } from 'src/app/modules/admin/models/parceiro.model';
import { filterParams } from '../../../shared/functions/util/filter-params.function';
import { Convenio } from 'src/app/modules/shared/models/parceiro/convenio.model';
import { FormaPagamento } from 'src/app/modules/shared/models/parceiro/forma-pagamento.model';
import { Banco } from 'src/app/modules/shared/models/parceiro/banco.model';


@Injectable({
  providedIn: 'root'
})
export class ParceirosAdmService {

  constructor(private http: HttpClient) { }

  listarParceirosAdmin(
    queryParams: ParceirosParams,
    filtro: ParceiroFiltro
  ): Observable<PaginatedContent<ParceiroResumo>> {
    const params = filterParams(queryParams);

    return this.http.post<PaginatedContent<ParceiroResumo>>('parceiros/adm/listar', filtro, {
      params: { ...params },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  obterParceiro(id: number): Observable<Parceiro> {
    return this.http.get<Parceiro>(`parceiros/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  cadastrarEstabelecimento(parceiro: ParceiroEstabelecimento): Observable<number> {
    return this.http.post<number>('parceiros-estabelecimentos/adm', {
      ...parceiro
    }, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  alterarEstabelecimento(parceiro: ParceiroEstabelecimento): Observable<number> {
    return this.http.put<number>(`parceiros-estabelecimentos/adm/${parceiro.id}`, {
      ...parceiro,
      cnpj: parceiro.cnpj == '' || !parceiro.cnpj ? null : parceiro.cnpj
    }, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  cadastrarProfissional(parceiro: ParceiroProfissional): Observable<number> {
    return this.http.post<number>('parceiros-profissionais/adm', {
      ...parceiro
    }, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  alterarProfissional(parceiro: ParceiroProfissional): Observable<number> {
    return this.http.put<number>(`parceiros-profissionais/adm/${parceiro.id}`, {
      ...parceiro
    }, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  listarConvenios(): Observable<Convenio[]> {
    return this.http.get<Convenio[]>('parceiros/adm/convenios', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarFormasPagamento(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>('parceiros/adm/formas-pagamento', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarBancos(): Observable<Banco[]> {
    return this.http.get<Banco[]>('parceiros/adm/bancos', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }
}
