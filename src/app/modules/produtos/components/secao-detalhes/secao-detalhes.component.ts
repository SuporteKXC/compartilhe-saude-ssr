import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { DetalhesProduto } from 'src/app/modules/content/models/detalhes-produto.model';
import { PerguntasFrequentes } from 'src/app/modules/content/models/perguntas-frequentes.model';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-secao-detalhes',
  templateUrl: './secao-detalhes.component.html',
  styleUrls: ['./secao-detalhes.component.scss'],
})
export class SecaoDetalhesComponent implements OnInit {
  @Input({ required: true }) formTemplate!: TemplateRef<unknown>;
  protected detalhesProduto!: DetalhesProduto;
  protected perguntas: PerguntasFrequentes[] = [];
  protected isLoading = false;

  constructor(
    private produtosService: ProdutosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          const idProduto = params['id'];
          if (idProduto) {
            this.obterProduto(idProduto);
          }
          return of(undefined);
        })
      )
      .subscribe();
  }

  obterProduto(idProduto: number) {
    this.produtosService.obterProduto(idProduto).subscribe({
      next: (response) => {
        this.perguntas = response.perguntasFrequentes.map((item) => {
          return {
            pergunta: item.pergunta as string,
            resposta: item.resposta as string,
          };
        });
        this.isLoading = false;
        this.detalhesProduto = response;
      },
    }).add(() => this.isLoading = false);
  }
}
