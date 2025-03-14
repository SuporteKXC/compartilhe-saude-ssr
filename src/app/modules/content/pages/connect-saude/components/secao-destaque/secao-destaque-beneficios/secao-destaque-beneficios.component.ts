import { Component } from '@angular/core';

@Component({
  selector: 'app-secao-destaque-beneficios',
  templateUrl: './secao-destaque-beneficios.component.html',
  styleUrls: ['./secao-destaque-beneficios.component.scss']
})
export class SecaoDestaqueBeneficiosComponent {
  beneficiosDestaque = [
    { nome: 'Mais receita, com menos dependência de convênios;', incluso: true },
    { nome: 'Consultório sempre movimentado, reduzindo a ociosidade;', incluso: true },
    { nome: 'Visibilidade e destaque no ambiente digital;', incluso: true },
    { nome: 'Uma base ampliada e diversificada de clientes.', incluso: true },
  ];
}
