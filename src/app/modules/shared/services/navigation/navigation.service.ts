import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { StateKey } from './models/state.type';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private stateSubject = new BehaviorSubject<StateKey | null>(null);
  private destroy$ = new Subject<void>();

  public state$: Observable<StateKey | null> = this.stateSubject.asObservable().pipe(take(1));

  setState(data: StateKey | null): void {
    this.stateSubject.next(data);
  }

  clearState(): void {
    this.stateSubject.next(null);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
