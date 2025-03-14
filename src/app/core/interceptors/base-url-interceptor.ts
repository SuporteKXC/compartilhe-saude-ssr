import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiRequest = req.clone({ url: `${environment.apiUrl}${req.url}` });
    if (
      req.url.startsWith('http://') ||
      req.url.startsWith('https://')
    ) {
      return next.handle(req);
    }
    return next.handle(apiRequest);
  }
}
