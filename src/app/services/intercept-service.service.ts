import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class InterceptService implements HttpInterceptor {

  constructor() { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(event.status);
          }
        }, error => {
          console.error('Response: status code:', error.status, error.message);
        })
      );
  }

  // public handleError( res: Response, url = null ) {
  //   try {
  //     this.errorDialogService.showErrorDialog(res[ 'error' ].message);
  //   } catch (e) {
  //     console.log('--- Error message on response --- ');
  //   }
  //   return res;
  // }

}
