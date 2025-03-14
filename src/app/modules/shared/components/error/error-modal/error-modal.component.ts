import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ErrorModalService } from '../../../services/error-modal/error-modal.service';
import { BackendError } from '../../../models/backend-error.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements AfterViewInit {
  @Input() titulo!: string;
  @Input() mensagem!: string;
  @Input() redirectLogin?: string;

  private errorQueue: BackendError[] = [];

  protected visible = false;

  constructor(
    private errorModalService: ErrorModalService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {}

  ngAfterViewInit(): void {
    this.errorModalService.openRequests$.subscribe((errors) => {
      this.errorQueue = this.errorQueue.concat(errors);

      if (isPlatformBrowser(this.plataformId)) {
        this.showNextError();
      }
    });
  }

  public showNextError(): void {
    if (this.errorQueue.length <= 0) return;

    const error = this.errorQueue.shift();

    this.mensagem = error?.mensagem ?? 'Ocorreu um erro. Tente novamente mais tarde.';

    if (error?.titulo) {
      this.titulo = error?.titulo;
    } 
  
    if (error?.codigo == '002') {
      this.redirectLogin = 'Clique aqui para efetuar o login';
    }

    this.visible = true;
  }
}
