import { createAction } from '@ngrx/store';

export const gameStarted = createAction(
  '[game] game started',
  () => ({
    randomNumber: Math.floor(Math.random() * 10) + 1 // stolen from Tom Gannaway
  })
);
