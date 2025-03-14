import { Injectable } from '@angular/core';
import Hotjar from '@hotjar/browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HotjarService {
  init() {
    Hotjar.init(environment.hotjar.siteId, environment.hotjar.version, { debug: environment.dev });
  }
}
