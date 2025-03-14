import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/modules/shared/services/navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, protected navigation: NavigationService) { }

  navigateToParceiros() {
    this.router.navigate(['nossos-parceiros']);
  }
}
