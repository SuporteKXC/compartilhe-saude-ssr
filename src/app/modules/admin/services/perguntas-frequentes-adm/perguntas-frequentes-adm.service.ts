import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { PerguntasFrequentes } from 'src/app/modules/shared/models/pergunta-frequente.model';
import { PerguntaFiltro } from '../../pages/gestao-perguntas-frequentes/models/pergunta-filtro.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';

@Injectable({
  providedIn: 'root'
})
export class PerguntasFrequentesAdmService {

  constructor(private httpClient: HttpClient) { }

  listarPerguntasFrequentes(params: PageableParams, filtros: PerguntaFiltro): Observable<PaginatedContent<PerguntasFrequentes>> {
    return this.httpClient.post<PaginatedContent<PerguntasFrequentes>>("perguntas-frequentes/adm/listar", filtros, {
      params: { ...params },
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  obterPerguntaFrequente(id: number): Observable<PerguntasFrequentes> {
    return this.httpClient.get<PerguntasFrequentes>(`perguntas-frequentes/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  cadastrarPerguntaFrequente(pergunta: PerguntasFrequentes): Observable<PerguntasFrequentes> {
    return this.httpClient.post<PerguntasFrequentes>("perguntas-frequentes/adm", pergunta, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  alterarPerguntafrequente(pergunta: PerguntasFrequentes): Observable<PerguntasFrequentes> {
    return this.httpClient.put<PerguntasFrequentes>(`perguntas-frequentes/adm/${pergunta.id}`, pergunta, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }

  deletaPerguntaFrequente(id: number): Observable<PerguntasFrequentes> {
    return this.httpClient.delete<PerguntasFrequentes>(`perguntas-frequentes/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true)
    });
  }
}
