import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, lastValueFrom, Observable } from 'rxjs';
import { AuthService } from '../app/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  async handler(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('auth/login')) return lastValueFrom(next.handle(req));

    const authToken =
    // !this.auth.isLoggedIn()
    //   ? (await this.auth.login()).token :
       this.auth.getCred();

    const authReq = req.clone({
      params: req.params.set('apiKey', `${authToken}`),
    });

    return lastValueFrom(next.handle(authReq));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.handler(req, next));
  }
}
