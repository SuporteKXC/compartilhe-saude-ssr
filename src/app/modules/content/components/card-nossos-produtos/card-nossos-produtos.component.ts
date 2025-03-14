import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LinkWhatsappService } from 'src/app/modules/shared/services/link-whatsapp/link-whatsapp.service';
import { ProdutoLabel } from 'src/app/modules/shared/models/produto/produto-label.model';
import { CardNossosProdutos } from '../../models/card-nossos-produtos.model';
import { getDynamicPath } from 'src/app/modules/shared/models/card-dynamic-routes.model';
import { PRODUTOS_DYNAMIC_ROUTES } from 'src/app/modules/shared/constants/produtos.constants';
import { CategoriaProduto } from 'src/app/modules/admin/pages/gestao-produtos/enums/CategoriaProduto';

@Component({
  selector: 'app-card-nossos-produtos',
  templateUrl: './card-nossos-produtos.component.html',
  styleUrls: ['./card-nossos-produtos.component.scss'],
})
export class CardNossosServicosComponent implements DoCheck {
  @Input() data!: ProdutoLabel;
  @Input() dataOdonto!: CardNossosProdutos;
  @Input() height!: string;

  protected isOdontologia = false;

  constructor(private linkWhatsappService: LinkWhatsappService, private router: Router) { }

  getLink(categoria: CategoriaProduto) {
    const route = getDynamicPath(PRODUTOS_DYNAMIC_ROUTES, categoria.toUpperCase());
    return route;
  }

  public getLinkWhatsapp(productName: string): string {
    const odontoMessage = `Olá gostaria de mais informações sobre os serviços de ${productName.toLowerCase()} da Compartilhe Sorrisos.`;
    const message = `Olá. Gostaria de saber mais informações para orçamento de ${productName.toLowerCase()} com a Compartilhe Saúde.`;

    return this.linkWhatsappService.gerarLink(this.isOdontologia ? odontoMessage : message);
  }

  ngDoCheck(): void {
    const activeRoute = this.router.url.replace('/', '');
    this.isOdontologia = activeRoute === 'odontologia';
  }

  public getIconPath(name: string) {
    return '/assets/icons/odontologia/' + name + '.svg';
  }
}
