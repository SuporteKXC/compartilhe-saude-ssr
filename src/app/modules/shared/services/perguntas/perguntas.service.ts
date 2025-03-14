import { PageableParams } from './../../models/paginacao/pageable-params.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerguntasFrequentes } from '../../models/pergunta-frequente.model';
import { PaginatedContent } from '../../models/paginacao/paginated-content.model';
import { PerguntaFiltro } from 'src/app/modules/admin/pages/gestao-perguntas-frequentes/models/pergunta-filtro.model';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private http: HttpClient) { }

  listarPerguntasFrequentes(params: PageableParams, filtro: PerguntaFiltro): Observable<PaginatedContent<PerguntasFrequentes>> {
    return this.http.post<PaginatedContent<PerguntasFrequentes>>("publico/perguntas-frequentes/listar", filtro, {
      params: { ...params }
    });
  }
}
