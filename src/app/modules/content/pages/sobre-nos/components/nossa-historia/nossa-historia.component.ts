import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: './nossa-historia.component.html',
  styleUrls: ['./nossa-historia.component.scss'],
})
export class NossaHistoriaComponent {
    public pathImage = environment.imgUrl;
}
