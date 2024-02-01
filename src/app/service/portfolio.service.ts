import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, of, throwError } from 'rxjs';
import { environment } from '../../environment/environment';
import { ContactForm, State } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  postContact(form: ContactForm) {
    return this.http
      .post(this.baseUrl + 'contact', JSON.stringify(form))
      .pipe(catchError(this.handleError));
  }

  getState(): Observable<State> {
    return this.http
      .get<State>(this.baseUrl + 'content')
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {

      return throwError(() => error);
    
  }
}
