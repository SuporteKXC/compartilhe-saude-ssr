import { Component, Input, OnInit } from '@angular/core';
import { TABLET_WIDTH_SIZE } from 'src/app/modules/shared/constants/device-size';
import { RedeCompartilhe } from 'src/app/modules/shared/models/parceiro/rede-compartilhe.model';
import { WindowService } from 'src/app/modules/shared/services/window/window.service';

@Component({
  selector: 'app-secao-informacao-parceiros',
  templateUrl: './secao-informacao-parceiros.component.html',
  styleUrls: ['./secao-informacao-parceiros.component.scss']
})
export class SecaoInformacaoParceirosComponent implements OnInit{
  @Input() detalhesParceiro!: RedeCompartilhe;

  protected activeIndex: number[] | null = [0];

  constructor(private window: WindowService) { }

  ngOnInit(): void {
    this.window.size$.subscribe(size => {
      if (size.width <= TABLET_WIDTH_SIZE) {
        this.activeIndex = [0];
      } else {
        this.activeIndex = [0, 1, 2, 3];
      }
    });
  }
}
