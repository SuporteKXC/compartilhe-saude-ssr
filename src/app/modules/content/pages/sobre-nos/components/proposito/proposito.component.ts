import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOBILE_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proposito',
  templateUrl: './proposito.component.html',
  styleUrls: ['./proposito.component.scss'],
})
export class PropositoComponent {
  constructor(private router: Router) {}

  public get estiloLinkImagem(): string {
    const windowWidth = window.innerWidth;

    if (windowWidth <= MOBILE_WIDTH_SIZE)
      return `url(${environment.imgUrl}/assets/Images/content/sobre-nos/background-mobile.jpg)`;
    else return `url(${environment.imgUrl}/assets/Images/content/sobre-nos/background-desktop.jpg)`;
  }

  navigateToPreCadastro() {
    this.router.navigate(['usuarios/pre-cadastro']);
  }
}
