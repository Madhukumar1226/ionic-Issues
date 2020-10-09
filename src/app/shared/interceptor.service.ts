import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, finalize } from "rxjs/operators";

import { UtilityService } from './utility.service';

@Injectable()
export class MyHttpInterceptorService implements HttpInterceptor {
  constructor(
    private utilityService: UtilityService
  ) { }
  sessionId: string = "";
  private authReq: HttpRequest<any>;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   
    this.utilityService.showLoader();
    //console.log(this.authReq);
    return next.handle(this.authReq).pipe(
       finalize(() => {
         this.utilityService.hideLoader()
      }) 
    );
  }

}
