import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseToUrl } from 'src/app/modules/shared/functions/parse-to-url/parse-to-url';
import { Produto } from 'src/app/modules/content/models/produto.model';
import { environment } from 'src/environments/environment';
import { getDynamicPath } from 'src/app/modules/shared/models/card-dynamic-routes.model';
import { of, switchMap } from 'rxjs';
import { PRODUTOS_DYNAMIC_ROUTES } from 'src/app/modules/shared/constants/produtos.constants';

@Component({
  selector: 'app-card-interesses',
  templateUrl: './card-interesses.component.html',
  styleUrls: ['./card-interesses.component.scss'],
})
export class CardInteressesComponent implements OnChanges {
  @Input() data!: Produto;

  @Output() navigated = new EventEmitter();

  protected pathImage = '';

  private idParam!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnChanges(): void {
    this.pathImage = `${environment.imgUrl + this.data?.pathImagem}`;
  }

  navigateToDetalhes(data: Produto) {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.idParam = Number(params['id']);
          }
          return of(undefined);
        })
      ).subscribe();

    if (this.data.id !== this.idParam) {
      this.navigated.emit();
      this.router.navigate([
        getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, data.categoria),
        'detalhes',
        data.id,
        parseToUrl(data.nome)
      ]);
    }
  }
}
