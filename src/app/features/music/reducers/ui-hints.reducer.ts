import { createReducer, Action, on } from '@ngrx/store';
import * as fromActions from '../actions/song.actions';
import { from } from 'rxjs';
export interface UiHintsState {
  songsLoaded: boolean;
}

const initialState: UiHintsState = {
  songsLoaded: false
};

const myReducer = createReducer(
  initialState,
  on(fromActions.loadedSongSuccessfully, (s) => ({ ...s, songsLoaded: true })),
  on(fromActions.loadSongs, (s) => ({ ...s, songsLoaded: false }))
);

export function reducer(state: UiHintsState, action: Action) {
  return myReducer(state, action);
}
