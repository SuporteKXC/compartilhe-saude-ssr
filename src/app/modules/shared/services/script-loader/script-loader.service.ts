import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Script } from './models/script.model';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private scripts: Script[] = [];

  public load(
    script: Script,
    options?: { async: boolean; defer: boolean },
    classe?: string
  ): Observable<Script> {
    return new Observable<Script>((observer: Observer<Script>) => {
      const loadedScript = this.scripts.find((s) => s.identifier === script.identifier);

      // complete if already loaded
      if (loadedScript) {
        observer.next(script);
        observer.complete();
      } else {
        const newScript = { ...script };

        this.scripts.push(newScript);

        // load the script
        const scriptElement = this.document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = newScript.src;
        if (classe) {
          scriptElement.className = classe;
        }
        scriptElement.async = options?.async ?? false;
        scriptElement.defer = options?.defer ?? false;

        // add listeners
        scriptElement.onload = () => {
          observer.next(newScript);
          observer.complete();
        };

        scriptElement.onerror = (error) => {
          observer.error(`Couldn't load script from source ${newScript.src}. Error: ${error}`);
        };

        this.document.getElementsByTagName('head')[0].appendChild(scriptElement);
      }
    });
  }
}
