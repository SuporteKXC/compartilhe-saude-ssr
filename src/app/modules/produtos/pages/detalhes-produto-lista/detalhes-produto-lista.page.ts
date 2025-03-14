import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetalhesProduto } from '../../../content/models/detalhes-produto.model';
import { of, switchMap } from 'rxjs';
import { ProdutosService } from 'src/app/modules/shared/services/produtos/produtos.service';
import { Location } from '@angular/common';
import { PerguntasFrequentes } from 'src/app/modules/content/models/perguntas-frequentes.model';

@Component({
  selector: 'app-detalhes-produto-lista',
  templateUrl: './detalhes-produto-lista.page.html',
  styleUrls: ['./detalhes-produto-lista.page.scss']
})
export class DetalhesProdutoListaPage implements OnInit {
  protected isLoading = false;
  protected isError = false;

  protected detalhesProduto!: DetalhesProduto | undefined;
  protected idProduto!: number;

  protected perguntas: PerguntasFrequentes[] = [];

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          const idProduto = params['id'];
          if (idProduto) {
            this.idProduto = idProduto;
            this.getDetalhesProduto();
          }
          return of(undefined);
        })
      ).subscribe();
  }

  getDetalhesProduto() {
    this.isLoading = true;
    this.produtosService.obterProduto(this.idProduto, true).subscribe({
      next: (response) => {

        this.perguntas = response.perguntasFrequentes.map(item => {
          return {
            pergunta: item.pergunta as string,
            resposta: item.resposta as string
          };
        });

        this.isError = false;
        this.detalhesProduto = response;
      },
      error: () => this.isError = true,
    }).add(() => this.isLoading = false);
  }

  goBack() {
    const segments = this.location.path().split('/').filter(segment => segment != '');
    this.router.navigate([segments[0]]);
  }
}
