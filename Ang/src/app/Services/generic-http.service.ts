import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GenericHttpService {

  constructor(private http: HttpClient) { }

   public HttpGetService(url: string): Observable<any> {
      return this.http.get<any>(url).pipe(catchError(this.errorHandler));
   }

  private errorHandler(errorHandler: HttpErrorResponse) {
    if (errorHandler.error instanceof ErrorEvent) {
             console.error('CLIENT side error' + JSON.stringify(errorHandler.error));
    } else {
      console.error('SERVER side error' + JSON.stringify(errorHandler));
    }
    return throwError('error in returning from the service,please contact admin');
  }
}
