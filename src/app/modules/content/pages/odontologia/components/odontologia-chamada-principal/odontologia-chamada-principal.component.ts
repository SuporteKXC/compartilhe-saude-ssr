import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-odontologia-chamada-principal',
  templateUrl: './odontologia-chamada-principal.component.html',
  styleUrls: ['./odontologia-chamada-principal.component.scss']
})
export class OdontologiaChamadaPrincipalComponent {
  public pathImage = environment.imgUrl;
  
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
