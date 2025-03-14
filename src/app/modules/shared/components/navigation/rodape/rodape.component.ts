import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LinkWhatsappService } from '../../../services/link-whatsapp/link-whatsapp.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent implements DoCheck {
  public activeRoute!: string;
  public isOdontologia = false;
  public messageLink!: string;
  public pathBucket = `${environment.imgUrl}/`;

  public bandeiras = [
    { nome: 'Visa', imgPath: '/assets/images/pagamento/visa-brand.svg' },
    { nome: 'MasterCard', imgPath: '/assets/images/pagamento/mastercard-brand.svg' },
    { nome: 'Elo', imgPath: '/assets/images/pagamento/elo-brand.svg' },
    { nome: 'Hipercard', imgPath: '/assets/images/pagamento/hipercard-brand.svg' },
    { nome: 'American Express', imgPath: '/assets/images/pagamento/american-express-brand.svg' },
    { nome: 'PIX', imgPath: '/assets/images/pagamento/pix-brand.svg' },
  ];

  constructor(private router: Router, private linkWhatstappService: LinkWhatsappService) {
    this.messageLink = linkWhatstappService.gerarLink();
  }

  ngDoCheck(): void {
    this.activeRoute = this.router.url.replace('/', '');
    // this.isOdontologia = this.activeRoute === 'odontologia';
  }

  get imgData() {
    const logoSorrisos = '/LOGO+SORRISOS+RODAP%C3%89.png';
    const logoSaude = '/assets/Images/logo-compartilhe-branco.png';

    const sorrisos = {
      src: logoSorrisos,
      alt: 'Compartilhe Sorrisos',
      title: 'Compartilhe Sorrisos'
    };

    const saude = {
      src: logoSaude,
      alt: 'Compartilhe Saúde',
      title: 'Compartilhe Saúde'
    };

    return this.isOdontologia ? sorrisos : saude;
  }

  getLink() {
    return this.isOdontologia ? 'odontologia' : '';
  }
}
