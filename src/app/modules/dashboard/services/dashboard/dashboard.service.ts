import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacoesIdVirtual } from '../../models/Informacoes-id-virtual.model';
import { AUTHENTICATED } from 'src/app/core/interceptors/context/context';
import { Perfil } from '../../models/perfil.model';
import { DadosPessoais } from '../../models/dados-pessoais.model';
import { onlyDigits } from 'src/app/modules/shared/functions/util/only-digits';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getIdVirtual(): Observable<InformacoesIdVirtual> {
    return this.http.get<InformacoesIdVirtual>('pessoas/id-virtual', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  getPerfil(): Observable<Perfil> {
    return this.http.get<Perfil>('pessoas/perfil', {
      context: new HttpContext().set(AUTHENTICATED, true),
    });
  }

  salvarDadosPessoais(dados: DadosPessoais): Observable<boolean> {
    return this.http.put<boolean>(
      'pessoas/dados-pessoais',
      {
        ...dados,
        cpf: onlyDigits(dados.cpf),
        contatoWhatsapp: dados.contatoWhatsapp ? onlyDigits(dados.contatoWhatsapp) : null,
      },
      {
        context: new HttpContext().set(AUTHENTICATED, true),
      }
    );
  }

  salvarEndereco(endereco: Endereco): Observable<boolean> {
    return this.http.put<boolean>('pessoas/endereco',
      {
        ...endereco,
        cep: endereco.cep ? onlyDigits(endereco.cep) : null,
        siglaUf: endereco.siglaUf || null,
        logradouro: endereco.logradouro || null,
        bairro: endereco.bairro || null,
        numero: endereco.numero || null,
        complemento: endereco.complemento || null,
      },
      {
        context: new HttpContext().set(AUTHENTICATED, true),
      }
    );
  }
}
