import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { PortfolioActions } from './portfolio.action';
import { State } from '../../types/types';

export const initialState: State = {
  id: null,
  type: null,
  about: null,
  home: {
    headlines: [],
    name: null,
    isLoaded: false,
  },
  skills: null,
  work: {
    title: '',
    company: '',
    period: '',
    technologies: '',
    missions: [],
    detailIsDisplayed: false,
  },
  portfolio: [
    {
      id: '',
      name: '',
      technologies: '',
      images: {
        title: '',
        src: '',
      },
      detail: '',
      codeSourceUrl: '',
      detailIsDisplayed: false,
    },
  ],
  blog: [
    {
      id: '',
      name: '',
      images: {
        title: '',
        src: '',
      },
      url: '',
    },
  ],
  education: null,
  isLoaded: false,
  error: null,
};

export const PorfolioFeature = createFeature({
  name: 'Porfolio',
  reducer: createReducer(
    initialState,
    on(PortfolioActions.loadPortfolioSuccess, (state, action: any) => {
      return {
        ...state,
        ...action.payload.response,
        isLoaded: true,
      };
    }),
    on(PortfolioActions.loadPortfolioFailure, (state, action: any) => {
      return {
        ...state,
        error: action.error.response,
        isLoaded: false,
      };
    })
  ),
});
