export const featureName = 'gameFeature';
import * as fromGuessingGame from './game.reducer';
import * as fromGuessCount from './guess-count.reducer';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

export interface GameState {
  game: fromGuessingGame.GuessingGameState;
  guessCount: fromGuessCount.GuessCountState;
}

export const reducers: ActionReducerMap<GameState> = {
  game: fromGuessingGame.reducer,
  guessCount: fromGuessCount.reducer
};


// 1.  Feature Selector
const selectGameFeature = createFeatureSelector<GameState>(featureName);
// 2. Selector per "branch" of the state.
const selectGameBranch = createSelector(selectGameFeature, feature => feature.game);

// 3. (optional) "Helpers"
const selectSecretNumber = createSelector(selectGameBranch, game => game.secretNumber);
const selectLastGuess = createSelector(selectGameBranch, game => game.guess);

// 4. What the components need.

// TODO: We need one that says we won! (secret === guess)
export const selectGameWon = createSelector(
  selectSecretNumber, // -> number that is the secret number (secret)
  selectLastGuess, // -> number that is the last guess (guess)
  (secret, guess) => {
    if (isNull(secret) || isNull(guess)) { return false; }
    return secret === guess;
  }
);

// Too low?
export const selectGuessTooLow = createSelector(
  selectGameWon,
  selectSecretNumber,
  selectLastGuess,
  (youWon, secret, guess) => {
    if (youWon) { return false; }
    return secret > guess;
  }
);
// Too High?
export const selectGuessTooHigh = createSelector(
  selectGameWon,
  selectSecretNumber,
  selectLastGuess,
  (youWon, secret, guess) => {
    if (youWon) { return false; }
    return secret < guess;
  }
);

function isNull(arg: any) {
  return arg === null;
}
