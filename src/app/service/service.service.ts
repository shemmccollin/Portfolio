import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environment/environment';
import { ContactForm } from '../types/types';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  postContactEmail(form: ContactForm): Observable<any> {
    return this.http
      .post(this.baseUrl + 'api/contact', form)
      .pipe(catchError(this.handleError));
  }

  getState() {
    return this.http
      .get<any>(this.baseUrl + 'api/state')
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error('Error', error.error);
    return throwError(() => new Error(error.error));
  }
}
