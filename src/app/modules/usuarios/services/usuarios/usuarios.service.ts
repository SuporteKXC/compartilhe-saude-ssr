import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaPreCadastro } from '../../models/pessoa-pre-cadastro.model';
import { onlyDigits } from '../../../shared/functions/util/only-digits';
import { MAX_RETRIES } from 'src/app/core/interceptors/context/context';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    constructor(private http: HttpClient) { }

    preCadastro(pessoa: PessoaPreCadastro): Observable<number> {
        return this.http.post<number>('publico/pessoas/precadastro', {
            ...pessoa,
            cpf: onlyDigits(pessoa.cpf),
            contatoWhatsapp: onlyDigits(pessoa.contatoWhatsapp),
        }, {
            context: new HttpContext().set(MAX_RETRIES, 0),
        });
    }

    validarExistente(token: string, cpf: string, email: string): Observable<string> {
        return this.http.get<string>('publico/pessoas/validar', {
            params: {
                cpf: onlyDigits(cpf),
                email: email, token: token
            },
            context: new HttpContext().set(MAX_RETRIES, 0),
        });
    }
}
