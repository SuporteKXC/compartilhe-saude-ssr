import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gestao-perguntas-frequentes',
  templateUrl: './gestao-perguntas-frequentes.component.html',
  styleUrls: ['./gestao-perguntas-frequentes.component.scss']
})
export class GestaoPerguntasFrequentesComponent {
  protected shouldSearchAgain$ = new Subject<void>();

  breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Perguntas Frequentes'
    },
  ];

  constructor(private router: Router) { }

  navigateToCadastrar() {
    this.router.navigate(["/", "admin", "dashboard", "perguntas-frequentes", "cadastrar"]);
  }
}
