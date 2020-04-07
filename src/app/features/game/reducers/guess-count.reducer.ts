import { createReducer, Action, on } from '@ngrx/store';
import * as gameActions from '../actions/game.actions';
export interface GuessCountState {
  count: number;
}

export const initialState: GuessCountState = {
  count: 0
};

const myReducer = createReducer(
  initialState,
  on(gameActions.gameStarted, () => initialState),
  on(gameActions.tookAGuess, (s) => ({ count: s.count + 1 }))
);

export function reducer(state: GuessCountState, action: Action) {
  return myReducer(state, action);
}
