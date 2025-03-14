import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gestao-produtos',
  templateUrl: './gestao-produtos.page.html',
  styleUrls: ['./gestao-produtos.page.scss']
})
export class GestaoProdutosPage {
  public shouldSearchAgain$ = new Subject<void>();

  breadcrumb: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/admin/dashboard'
    },
    {
      label: 'Produtos Compartilhe'
    }
  ];

  constructor(private router: Router) { }

  navigateToNovoProduto() {
   this.router.navigate(['/', 'admin', 'dashboard', 'produtos-compartilhe', 'cadastrar']);
  }
}
