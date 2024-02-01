import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { PortfolioService } from '../../service/portfolio.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class PortfolioEffects {
  loadPortfolio$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Portfolio API] loadPortfolio'),
      exhaustMap(() =>
        this.portfolioService.getState().pipe(
          map((portfolio) => ({
            type: '[Portfolio API] loadPortfolioSuccess',
            payload: portfolio,
          })),
          catchError((error) =>
            of({ type: '[Portfolio API] loadPortfolioFailure', error: error })
          )
        )
      )
    )
  );

  postContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Portfolio API] postContact'),
      exhaustMap((contact) =>
        this.portfolioService.postContact(contact).pipe(
          map((portfolio) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Message successfully sent.',
            });
            return {
              type: '[Portfolio API] loadPortfolioSuccess',
              payload: portfolio,
            };
          }),
          catchError((error) => {
            if (error.status === 200) {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Message successfully sent.',
              });
              return EMPTY;
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred while sending message.',
              });
              return of({
                type: '[Portfolio API] loadPortfolioFailure',
                error: error,
              });
            }
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService,
    private messageService: MessageService
  ) {}
}
