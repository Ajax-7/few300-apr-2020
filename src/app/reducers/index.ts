import * as fromErrors from './errors.reducer';
import { createSelector } from '@ngrx/store';
export interface AppState {
  errors: fromErrors.ErrorsState;
}

export const reducers = {
  errors: fromErrors.reducer
};


const selectErrorsBranch = (state: AppState) => state.errors;

export const selectHasErrors = createSelector(selectErrorsBranch, b => b.hasErrors);
export const selectErrorMessage = createSelector(selectErrorsBranch, b => b.errorMessage);
