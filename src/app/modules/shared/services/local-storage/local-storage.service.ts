import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage | null>('Browser Storage', {
  providedIn: 'root',
  factory: () => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return localStorage;
    }
    return null;
  }
});

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(BROWSER_STORAGE) public storage: Storage
  ) {
    this._isBrowser = isPlatformBrowser(platformId);
  }

  set(key: string, value: string) {
    if (this._isBrowser)
      this.storage.setItem(key, value);
  }

  get(key: string): string | null {
    if (this._isBrowser)
      return this.storage.getItem(key);
    return null;
  }

  remove(key: string): void {
    if (this._isBrowser)
      this.storage.removeItem(key);
  }

  clear(): void {
    if (this._isBrowser)
      this.storage.clear();
  }
}
