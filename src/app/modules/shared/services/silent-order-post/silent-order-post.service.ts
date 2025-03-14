import { Injectable } from '@angular/core';
import { ScriptLoaderService } from '../script-loader/script-loader.service';
import { Scripts } from '../script-loader/data/scripts';
import { environment } from 'src/environments/environment';
import { SopOptions } from './models/sop-options.model';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { AUTHENTICATED, SKIP_400_ERROR_MODAL } from 'src/app/core/interceptors/context/context';

declare function bpSop_silentOrderPost(options: SopOptions): void;

@Injectable({
  providedIn: 'root',
})
export class SilentOrderPostService {
  constructor(scriptLoaderService: ScriptLoaderService, private http: HttpClient) {
    const shouldUseSandbox = environment.silentOrderPost.useSandbox;

    scriptLoaderService
      .load(shouldUseSandbox ? Scripts.SOP_SANDBOX : Scripts.SOP, {
        async: true,
        defer: true,
      })
      .subscribe();
  }

  public getPaymentToken(): Observable<string> {
    const paymentTokenSubject = new Subject<string>();

    this.getAccessToken()
      .pipe(
        catchError((err) => {
          paymentTokenSubject.error(err);
          return of(err);
        }),
        tap((accessToken) => {
          const options: SopOptions = {
            accessToken,
            environment: environment.silentOrderPost.useSandbox ? 'sandbox' : 'production',
            language: 'pt',
            enableTokenize: false,
            cvvRequired: true,
            onSuccess(e) {
              paymentTokenSubject.next(e.PaymentToken);
            },
            onError(e) {
              paymentTokenSubject.error(e);
            },
            onInvalid(e) {
              paymentTokenSubject.error(e);
            },
          };

          bpSop_silentOrderPost(options);
        })
      )
      .subscribe();

    return paymentTokenSubject;
  }

  private getAccessToken(): Observable<string> {
    return this.http.get('sop', {
      context: new HttpContext().set(AUTHENTICATED, true).set(SKIP_400_ERROR_MODAL, true),
      responseType: 'text',
    });
  }
}
