import { Action, createReducer, on } from '@ngrx/store';
import * as errorActions from '../actions/app.actions';

export interface ErrorsState {
  hasErrors: boolean;
  errorMessage: string;
}


const initialState: ErrorsState = {
  hasErrors: false,
  errorMessage: null
};

const myReducer = createReducer(
  initialState,
  on(errorActions.applicationFeatureError, (s, a) => ({ hasErrors: true, errorMessage: a.errorMessage })),
  on(errorActions.clearApplicationFeatureError, () => initialState)
);

export function reducer(state: ErrorsState, action: Action) {
  return myReducer(state, action);
}
