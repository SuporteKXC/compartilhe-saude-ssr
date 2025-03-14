import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { PessoaJuridica } from '../../../models/pessoa-juridica.model';
import { Observable } from 'rxjs';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { FiltroPessoas } from '../../../models/filtro-pessoas.mode';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
    return this.http.post<PessoaJuridica>('pessoas-juridicas/adm', pessoa, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  atualizar(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
    return this.http.put<PessoaJuridica>('pessoas-juridicas/adm', pessoa, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  obter(id: number): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(`pessoas-juridicas/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listar(queryParams: PageableParams, filtro: FiltroPessoas): Observable<PaginatedContent<PessoaJuridica>> {
    return this.http.post<PaginatedContent<PessoaJuridica>>('pessoas-juridicas/adm/listar', filtro, {
      params: { ...queryParams },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }
}
