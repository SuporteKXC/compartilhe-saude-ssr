import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoService } from '../../../../services/carrinho.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-valores',
  templateUrl: './card-valores.component.html',
  styleUrls: ['./card-valores.component.scss'],
})
export class CardValoresComponent implements OnInit {
  total$!: Observable<number>;

  public form = this.fb.group({
    cupom: this.fb.control(''),
  });

  public get cupomCustomErrors() {
    return {
      cupomInvalido: 'Cupom inválido',
    };
  }

  constructor(
    private carrinhoService: CarrinhoService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.total$ = this.carrinhoService.getTotalCarrinhoAndUpdates();
  }

  navigateToPagamentoAfterLogin() {
    if (!this.authService.verifyToken()) {
      this.authService.login('pagamento/forma-pagamento');
    } else {
      this.router.navigate(['pagamento', 'forma-pagamento']);
    }
  }

  handleAplicarCupomClick() {
    this.form.get('cupom')?.setErrors({ cupomInvalido: true });
  }
}
