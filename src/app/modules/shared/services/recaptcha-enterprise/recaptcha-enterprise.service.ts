import { Injectable } from '@angular/core';
import { ScriptLoaderService } from '../script-loader/script-loader.service';
import { BehaviorSubject, Observable, filter, from, switchMap } from 'rxjs';
import { Scripts } from '../script-loader/data/scripts';
import { environment } from 'src/environments/environment';
import { Recaptcha } from './models/grecaptcha.model';

declare const grecaptcha: Recaptcha;

@Injectable({
  providedIn: 'root',
})
export class RecaptchaEnterpriseService {
  private ready = new BehaviorSubject(false);

  constructor(scriptLoaderService: ScriptLoaderService) {
    scriptLoaderService.load(Scripts.RECAPTCHA_ENTERPRISE, { async: true, defer: true }).subscribe(() => {
      grecaptcha.enterprise.ready(() => this.ready.next(true));
    });
  }

  public execute(action: string): Observable<string> | null {
    return this.ready.pipe(
      filter((ready) => ready), // execute only when true values are emitted
      switchMap(
        // change observable to the api call
        () => from(grecaptcha.enterprise.execute(environment.recaptchaEnterpriseKeyId, { action: action }))
      )
    );
  }
}
