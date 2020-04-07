import { createReducer, Action } from '@ngrx/store';

export interface SongsSortState {
  sortBy: 'title' | 'artist';
}

const initialState: SongsSortState = {
  sortBy: 'title'
};


const myReducer = createReducer(
  initialState
);

export function reducer(state: SongsSortState, action: Action) {
  return myReducer(state, action);
}
