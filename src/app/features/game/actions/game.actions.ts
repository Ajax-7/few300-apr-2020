import { createAction, props } from '@ngrx/store';

// this.store.dispatch(gameStarted())
export const gameStarted = createAction(
  '[game] game started',
  () => ({
    randomNumber: Math.floor(Math.random() * 10) + 1 // stolen from Tom Gannaway
  })
);
// this.store.dispatch(tookAGuess({ guess }))
export const tookAGuess = createAction(
  '[game] took a guess',
  props<{ guess: number }>()
);
