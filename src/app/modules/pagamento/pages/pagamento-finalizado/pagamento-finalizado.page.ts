import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-finalizado',
  templateUrl: './pagamento-finalizado.page.html',
  styleUrls: ['./pagamento-finalizado.page.scss'],
})
export class PagamentoFinalizadoPage {
  constructor(private router: Router) {}

  public navigateToMeusPedidos(): void {
    this.router.navigate(['/', 'dashboard', 'meus-pedidos']);
  }
}
