import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as songActions from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(songActions.songAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(songActions.loadedSongSuccessfully, (s, a) => adapter.setAll(a.payload, s))
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}



