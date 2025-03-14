import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { environment } from 'src/environments/environment';
import { getDynamicPath } from '../../../models/card-dynamic-routes.model';
import { ProdutoState } from 'src/app/modules/content/models/produto-state-model';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { PRODUTOS_DYNAMIC_ROUTES } from '../../../constants/produtos.constants';
import { State } from '../../../services/navigation/models/state.type';

@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.scss'],
})
export class CardProdutosComponent implements OnInit {
  @Input() data!: Produto;
  @Input() state!: State<ProdutoState>;

  protected pathImage!: string;

  constructor(
    private router: Router,
    private navigation: NavigationService
  ) { }

  ngOnInit(): void {
    this.pathImage = `${environment.imgUrl + this.data.pathImagem}`;
  }

  navigateToDetalhes(data: Produto) {
    this.navigation.setState(this.state);
    this.router.navigate([
      getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, data.categoria),
      'detalhes',
      data.id,
      parseToUrl(data.nome)
    ]);
  }
}
