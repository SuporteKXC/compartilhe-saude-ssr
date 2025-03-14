import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../../models/endereco/cidade.model';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor(private http: HttpClient) {}

  public listarCidades(nome: string, uf = ''): Observable<Cidade[]> {
    return this.http.get<Cidade[]>('publico/cidades', { params: { nome, uf } });
  }
}
