import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private spinnerService: SpinnerService, 
    private router: Router,
    private authService:AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.llamarSpinner();

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && error.error.message === 'Token has expired') {
          this.router.navigate(['./']);
          localStorage.removeItem('token');
          localStorage.removeItem('idUsuario');
          localStorage.removeItem('usuario');
        }
        return throwError(error);
      }),
      finalize(() => {
        
        this.spinnerService.detenerSpinner();
      })
    );
  }

}
