import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/modals/confirmation-modal/confirmation-modal.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
  const dialogService = inject(DialogService);

  if (component.canDeactivate) {
    const canDeactivate = component.canDeactivate();
    if (canDeactivate instanceof Promise) {
      return canDeactivate;
    }
    if (canDeactivate) {
      return true;
    }
  }

  return new Promise<boolean>((resolve) => {
    const modalReference = dialogService.open(ConfirmationModalComponent, {
      data: { 
        titulo: 'Suas alterações não foram salvas!',
        mensagem: 'Saindo agora você irá perdê-las.',
        botaoCancelar: {
          label: 'Voltar',
          outlined: true,
        },
        botaoConfirmar: {
          label: 'Sair'
        }
      },
      styleClass: 'confirmation-modal',
    });

    modalReference.onClose.subscribe((confirmado) => {
      if (confirmado) {
        resolve(confirmado);
      }
    });
  });
};
