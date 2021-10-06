import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../services/storage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private storeService: StoreService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storeService.getToken;
    if (token) {
      // tslint:disable-next-line:no-parameter-reassignment
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    if (
      !request.headers.has('Content-Type') &&
      !request.headers.has('No-Content-Type')
    ) {
      // tslint:disable-next-line:no-parameter-reassignment
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    // if (!request.headers.has('Accept')) {
    //     request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    // }
    return next.handle(request);
  }
}
