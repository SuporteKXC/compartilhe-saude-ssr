import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacoesIdVirtual } from 'src/app/modules/dashboard/models/Informacoes-id-virtual.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-id-virtual',
  templateUrl: './card-id-virtual.component.html',
  styleUrls: ['./card-id-virtual.component.scss']
})
export class CardIdVirtualComponent {
  pathImage = `${environment.imgUrl}/assets/Images/logo-compartilhe-branco.png`;

  @Input() visible = false;
  @Input() userData!: Observable<InformacoesIdVirtual>;

  @Output()
  handleClose = new EventEmitter<void>();

  handleCloseEvent(): void {
    this.handleClose.emit();
  }

}
