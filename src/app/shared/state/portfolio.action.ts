import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ContactForm, State } from '../../types/types';

export const PortfolioActions = createActionGroup({
    source: 'Portfolio API',
    events: {
      loadPortfolio: emptyProps(),
      loadPortfolioSuccess: props<{ payload: State }>(),
      loadPortfolioFailure: props<{ error: any }>(),
      postContact: props<{ contact?: ContactForm }>(),
    },
  });