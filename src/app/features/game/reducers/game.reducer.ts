import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/game.actions';

export interface GuessingGameState {
  secretNumber: number;
  guess: number;
}

const initialState: GuessingGameState = {
  secretNumber: null,
  guess: null
};


const myReducer = createReducer(
  initialState,
  on(actions.gameStarted, (oldState, act) => ({
    ...oldState, secretNumber: act.randomNumber
  })),
  on(actions.tookAGuess, (oldState, act) => ({ ...oldState, guess: act.guess }))
);

export function reducer(state: GuessingGameState, action: Action) {
  return myReducer(state, action);
}
