import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-saude',
  templateUrl: './connect-saude.component.html',
  styleUrls: ['./connect-saude.component.scss']
})
export class ConnectSaudeComponent {
  constructor(private router: Router) { }

  navigateToConnectSaude() {
    this.router.navigate(['/planos-connect-saude']);
  }
}
