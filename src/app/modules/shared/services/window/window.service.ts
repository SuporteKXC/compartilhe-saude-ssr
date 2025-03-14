import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private _isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) plataformId: string,
    private ngZone: NgZone
  ) {
    this._isBrowser = isPlatformBrowser(plataformId);
    this.windowSizeObservable();
  }

  public size$ = new BehaviorSubject<{ width: number; height: number }>({
    width: this._isBrowser ? window.innerWidth : 0,
    height: this._isBrowser ? window.innerHeight : 0,
  });

  private windowSizeObservable() {
    if (this._isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        const resize$ = fromEvent(window, 'resize');
        const load$ = fromEvent(window, 'load');
  
        merge(resize$, load$).subscribe(() => {
          this.size$.next({
            width: window.innerWidth,
            height: innerHeight
          });
        });
      });
    }
  }
}