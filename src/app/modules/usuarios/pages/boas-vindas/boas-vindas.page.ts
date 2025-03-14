import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.page.html',
  styleUrls: ['./boas-vindas.page.scss']
})
export class BoasVindasPage {
  pathImage = `${environment.imgUrl}`;
}
