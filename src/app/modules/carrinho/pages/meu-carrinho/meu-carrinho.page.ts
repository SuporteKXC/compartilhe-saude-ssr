import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CarrinhoItem } from '../../models/carrinho-item.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-meu-carrinho',
  templateUrl: './meu-carrinho.page.html',
  styleUrls: ['./meu-carrinho.page.scss'],
})
export class MeuCarrinhoPage implements OnInit{
  carrinho$!: Observable<CarrinhoItem[]>;

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.getCarrinhoAndUpdates();
  }

  public navigate() {
    this.router.navigate(['']);
  }

  public indentifyItemCarrinho(index: number, item: CarrinhoItem) {
    return item.localStorageId;
  }
}
