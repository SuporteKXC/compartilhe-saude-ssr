import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

    cancelar(): void {
        this.ref.close(false);
    }

    confirmar(): void{
        this.ref.close(true);
    }
}
