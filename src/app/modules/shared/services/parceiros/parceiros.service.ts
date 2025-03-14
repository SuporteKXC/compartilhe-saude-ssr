import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { ParceirosParams } from '../../../content/models/parceiros-params.model';
import { AUTHENTICATED, SKIP_ERROR_MODAL } from 'src/app/core/interceptors/context/context';
import { CategoriaParceiroEnum } from 'src/app/modules/admin/pages/gestao-parceiros/enums/categoria-parceiro.enum';
import { ParceiroSubcategoria } from 'src/app/modules/shared/models/parceiro/parceiro-subcategoria.model';
import { ParceiroServico } from 'src/app/modules/shared/models/parceiro/parceiro-servico.model';
import { LocalAtendimento } from 'src/app/modules/shared/models/parceiro/local-atendimento.model';
import { FormaAtendimento } from 'src/app/modules/shared/models/parceiro/forma-atendimento.model';
import { filterParams } from '../../functions/util/filter-params.function';
import { ParceiroProfissionalResumo } from '../../models/parceiro/parceiro-profissional-resumo.model';
import { ParceiroDestaqueResumo } from '../../models/parceiro/parceiro-destaque-resumo';

@Injectable({
  providedIn: 'root',
})
export class ParceirosService {

  constructor(private http: HttpClient) { }

  obterParceiro(id: number | null, idCidade: number | null, skipErrorModal = false): Observable<RedeCompartilhe> {
    const queryParams = filterParams({ idCidade });

    return this.http.get<RedeCompartilhe>(`publico/parceiros/${id}`, {
      params: { ...queryParams },
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    });
  }

  listarParceiros(queryParams: ParceirosParams): Observable<PaginatedContent<RedeCompartilhe>> {
    const params = filterParams(queryParams);

    return this.http.get<PaginatedContent<RedeCompartilhe>>('publico/parceiros', {
      params: { ...params },
      context: new HttpContext().set(SKIP_ERROR_MODAL, true),
    });
  }

  listarSubcategorias(categoria: CategoriaParceiroEnum[] | null, skipErrorModal = false): Observable<ParceiroSubcategoria[]> {
    return this.http.post<ParceiroSubcategoria[]>('publico/parceiros/subcategorias', categoria, {
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    }
    );
  }

  listarServicos(): Observable<ParceiroServico[]> {
    return this.http.get<ParceiroServico[]>('parceiros/servicos', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarLocaisAtendimento(idProfissional?: number, isParceiro?: boolean): Observable<LocalAtendimento[]> {
    const profissional = idProfissional ? { idProfissional: idProfissional } : undefined;
    const parceiro = isParceiro ? { parceiro: isParceiro } : undefined;

    return this.http.get<LocalAtendimento[]>('parceiros/locais-atendimento', {
      params: { ...profissional, ...parceiro },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarProfissionais(): Observable<ParceiroProfissionalResumo[]> {
    return this.http.get<ParceiroProfissionalResumo[]>('parceiros/profissionais', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listarFormasAtendimento(skipErrorModal = false): Observable<FormaAtendimento[]> {
    return this.http.get<FormaAtendimento[]>('publico/parceiros/formas-atendimento', {
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    });
  }

  listarParceiroNomes(skipErrorModal = false): Observable<ParceiroProfissionalResumo[]> {
    return this.http.get<ParceiroProfissionalResumo[]>('publico/parceiros/nomes', {
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    });
  }

  listarParceiroDestaque(page = 1, pageSize = 5, skipErrorModal = false): Observable<PaginatedContent<ParceiroDestaqueResumo>> {
    const params = filterParams({ page, pageSize });

    return this.http.get<PaginatedContent<ParceiroDestaqueResumo>>('publico/parceiros/destaque', {
      params: { ...params },
      context: new HttpContext().set(SKIP_ERROR_MODAL, skipErrorModal),
    });
  }
}
