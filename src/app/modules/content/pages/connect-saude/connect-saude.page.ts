import { Component, OnInit } from '@angular/core';
import { PerguntasFrequentes } from '../../models/perguntas-frequentes.model';
import { PerguntasService } from 'src/app/modules/shared/services/perguntas/perguntas.service';

@Component({
  selector: 'app-connect-saude-page',
  templateUrl: './connect-saude.page.html',
  styleUrls: ['./connect-saude.page.scss']
})
export class ConnectSaudePage implements OnInit {
  public perguntas: PerguntasFrequentes[] = [];

  constructor(private perguntasService: PerguntasService) { }

  ngOnInit(): void {
    const params = { page: 1, pageSize: 20 };

    const filtro = {
      busca: null,
      categoria: "CONNECT_SAUDE"
    };

    this.perguntasService.listarPerguntasFrequentes(params, filtro).subscribe(res => {
      this.perguntas = res.data.map((item) => {
        return {
          pergunta: item.pergunta as string,
          resposta: item.resposta as string
        };
      });
    });
  }
}
