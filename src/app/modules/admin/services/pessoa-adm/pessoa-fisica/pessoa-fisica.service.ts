import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { PessoaFisica } from 'src/app/modules/admin/models/pessoa-fisica.model';
import { PaginatedContent } from 'src/app/modules/shared/models/paginacao/paginated-content.model';
import { PageableParams } from 'src/app/modules/shared/models/paginacao/pageable-params.model';
import { FiltroPessoas } from '../../../models/filtro-pessoas.mode';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: PessoaFisica): Observable<PessoaFisica> {
    return this.http.post<PessoaFisica>('pessoas-fisicas/adm', pessoa, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  atualizar(pessoa: PessoaFisica): Observable<PessoaFisica> {
    return this.http.put<PessoaFisica>('pessoas-fisicas/adm', pessoa, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  obter(id: number): Observable<PessoaFisica> {
    return this.http.get<PessoaFisica>(`pessoas-fisicas/adm/${id}`, {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  listar(queryParams: PageableParams, filtro: FiltroPessoas): Observable<PaginatedContent<PessoaFisica>> {
    return this.http.post<PaginatedContent<PessoaFisica>>('pessoas-fisicas/adm/listar', filtro, {
      params: { ...queryParams },
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }
}
