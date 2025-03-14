import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormaAtendimentoEnum } from 'src/app/modules/shared/enums/forma-atendimento.enum';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { PerguntasFrequentes } from '../../models/perguntas-frequentes.model';

@Component({
  selector: 'app-detalhes-nossos-parceiros',
  templateUrl: './detalhes-nossos-parceiros.page.html',
  styleUrls: ['./detalhes-nossos-parceiros.page.scss'],
})
export class DetalhesNossosParceirosPage implements OnInit {
  protected message = '';

  protected idParceiro!: number | null;
  protected idCidade!: number | null;
  protected atendimento!: FormaAtendimentoEnum | null;

  protected detalhesParceiro!: RedeCompartilhe;
  protected perguntas: PerguntasFrequentes[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private parceirosService: ParceirosService,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idParceiro = Number(this.obterParametrosDaUrl(params, 'idParceiro'));
      this.idCidade = this.obterParametrosDaUrl(params, 'idCidade');
      this.atendimento = this.obterParametrosDaUrl(params, 'formaAtendimento');
    });

    this.parceirosService.obterParceiro(this.idParceiro, this.idCidade, true).subscribe({
      next: (response) => {
        this.perguntas = response.perguntasFrequentes.map(item => {
          return {
            pergunta: item.pergunta as string,
            resposta: item.resposta as string
          };
        });

        this.detalhesParceiro = response;
        this.message = `Olá, gostaria de informações referente a ${this.detalhesParceiro.nomeParceiro}.`;
      },
    });
  }

  navigateToParceiros() {
    this.router.navigate(['nossos-parceiros']);
  }

  private obterParametrosDaUrl<T>(paramMap: ParamMap, param: string): T | null {
    const valor = paramMap.get(param);
    return (valor ?? null) as T;
  }
}
