import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, catchError, delay, of, retry, throwError } from 'rxjs';
import { BackendError } from 'src/app/modules/shared/models/backend-error.model';
import { ErrorModalService } from 'src/app/modules/shared/services/error-modal/error-modal.service';
import { MAX_RETRIES, SKIP_400_ERROR_MODAL, SKIP_ERROR_MODAL } from './context/context';
import { isServerError } from 'src/app/modules/shared/functions/error-handling/http-error-response';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly DELAY_MS = 500;

  constructor(
    private errorModalService: ErrorModalService,
    @Inject(PLATFORM_ID) private plataformId: string,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const skip400ErrorModal = req.context.get(SKIP_400_ERROR_MODAL);
    const skipErrorModal = req.context.get(SKIP_ERROR_MODAL);
    const maxRetries = req.context.get(MAX_RETRIES);

    return next.handle(req).pipe(
      retry({
        count: maxRetries,
        delay: (error: HttpErrorResponse) => {
          if (isServerError(error)) {
            return of(error).pipe(delay(this.DELAY_MS));
          }

          throw error;
        },
      }),
      catchError((error: HttpErrorResponse) => {
        if ((isServerError(error) || !skip400ErrorModal) && !skipErrorModal)
          this.errorModalService.open(error.error as BackendError[]);

        return throwError(() => error);
      })
    );
  }
}
