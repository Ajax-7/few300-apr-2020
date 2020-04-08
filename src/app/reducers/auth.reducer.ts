import { Action } from '@ngrx/store';

export interface AuthState {
  isAdmin: boolean;
}

const intialState: AuthState = {
  isAdmin: true
};

export function reducer(state: AuthState = intialState, action: Action) {
  return state;
}
