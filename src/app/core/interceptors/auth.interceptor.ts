import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AUTHENTICATED } from './context/context';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authenticatedContext = request.context.get(AUTHENTICATED);
    const accessToken = this.authService.getAccessToken();

    if (authenticatedContext) {
      const authenticatedReq = request.clone({
        headers: request.headers
        .set('Authorization', `Bearer ${accessToken}`)
      });
      return next.handle(authenticatedReq);
    }
    return next.handle(request);
  }
}
