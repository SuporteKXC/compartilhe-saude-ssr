import { Component } from '@angular/core';

@Component({
  selector: 'app-odontologia-nossas-unidades',
  templateUrl: './odontologia-nossas-unidades.component.html',
  styleUrls: ['./odontologia-nossas-unidades.component.scss'],
})
export class OdontologiaNossasUnidadesComponent {
  public unidades = [
    {
      image: '/Compartilhe+Sorrisos+-+Pinheiros+-+ES.jpeg',
      local: 'Compartilhe Sorrisos - Pinheiros - ES',
    },
    {
      image: '/Compartilhe+Sorrisos+-+S%C3%A3o+Mateus+-+ES.jpg',
      local: 'Compartilhe Sorrisos - São Mateus - ES',
    },
  ];
}
