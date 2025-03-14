import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-gestao-parceiros',
  templateUrl: './gestao-parceiros.page.html',
  styleUrls: ['./gestao-parceiros.page.scss'],
})
export class GestaoParceirosPage {
  public shouldSearchAgain$ = new Subject<void>();

  breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Rede Compartilhe'
    },
  ];

  constructor(private router: Router) {}

  navigateToCadastrar() {
    this.router.navigate(['/', 'admin', 'dashboard', 'rede-compartilhe', 'cadastrar']);
  }
}
