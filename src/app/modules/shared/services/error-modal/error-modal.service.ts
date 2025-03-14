import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BackendError } from '../../models/backend-error.model';

@Injectable({
  providedIn: 'root',
})
export class ErrorModalService {
  public openRequests$ = new ReplaySubject<BackendError[]>();

  public open(errors: BackendError[]): void {
    this.openRequests$.next(errors);
  }
}
