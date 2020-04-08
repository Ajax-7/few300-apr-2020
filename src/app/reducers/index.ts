import * as fromErrors from './errors.reducer';
import * as fromAuth from './auth.reducer';
import { createSelector } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';

export interface AppState {
  errors: fromErrors.ErrorsState;
  auth: fromAuth.AuthState;
  router: RouterState.Minimal;
}

export const reducers = {
  errors: fromErrors.reducer,
  auth: fromAuth.reducer,
  router: routerReducer
};


const selectErrorsBranch = (state: AppState) => state.errors;
const selectAuthBranch = (state: AppState) => state.auth;

// 4.
export const selectIsAdmin = createSelector(selectAuthBranch, a => a.isAdmin);
export const selectHasErrors = createSelector(selectErrorsBranch, b => b.hasErrors);
export const selectErrorMessage = createSelector(selectErrorsBranch, b => b.errorMessage);
