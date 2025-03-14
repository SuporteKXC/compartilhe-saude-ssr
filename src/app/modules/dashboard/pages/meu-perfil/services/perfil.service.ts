import { Injectable } from '@angular/core';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { Perfil } from '../../../models/perfil.model';
import { DadosPessoais } from '../../../models/dados-pessoais.model';
import { Observable, ReplaySubject, map } from 'rxjs';
import { Endereco } from 'src/app/modules/shared/models/endereco/endereco.model';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private perfil$: ReplaySubject<Perfil> = new ReplaySubject(1);

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.getPerfil().subscribe((perfil) => this.perfil$.next(perfil));
  }

  public get dadosPessoais(): Observable<DadosPessoais> {
    return this.perfil$.pipe(map((perfil) => perfil.dadosPessoais));
  }

  public get enderecos(): Observable<Endereco[]> {
    return this.perfil$.pipe(map((perfil) => perfil.enderecos));
  }
}
