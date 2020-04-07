import { createReducer, Action, on } from '@ngrx/store';
import { sortBy } from '../actions/sort.actions';

export interface SongsSortState {
  sortBy: 'title' | 'artist';
}

const initialState: SongsSortState = {
  sortBy: 'title'
};


const myReducer = createReducer(
  initialState,
  on(sortBy, (s, a) => ({ sortBy: a.by }))
);

export function reducer(state: SongsSortState, action: Action) {
  return myReducer(state, action);
}
