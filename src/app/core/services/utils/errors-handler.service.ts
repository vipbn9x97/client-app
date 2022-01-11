import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { get } from 'lodash';


@Injectable()
export class ErrorsHandlerService implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
  ) { }

  public handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      if (!NgZone.isInAngularZone()) {
        this.ngZone.run(() => {
          const action = 'dismiss';
          let message = 'iss';
          if (error.status === 401) message = 'auth.session_timedout';
          else if (!navigator.onLine) message = 'offline.warning.full';
          else if (error.status === 403) message = 'forbidden';
          message = (get(error, 'error.message', message), get(error, 'error.data', {}));
          // this.snackBar.open(message, action, { duration: 4000 });
        });
      }
    } else {
      console.error('An error occurred:', error);
    }
  }

}
