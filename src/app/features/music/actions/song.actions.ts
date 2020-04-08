import { SongEntity } from '../reducers/songs.reducer';
import { createAction, props } from '@ngrx/store';

let tempId = 1;

export const songAdded = createAction(
  '[music] song added',
  ({ title, artist, album, year }: { title: string, artist: string, album: string, year: number }) => ({
    payload: {
      id: 'T' + tempId++,
      title, artist, album, year
    } as SongEntity
  })
);


export const loadSongs = createAction(
  '[music] load the songs'
);

export const loadedSongSuccessfully = createAction(
  '[music] loaded the songs successfully',
  props<{ payload: SongEntity[] }>()
);

export const loadedSongFailure = createAction(
  '[music] loading the songs failed',
  props<{ errorMessage: string, statusCode: number }>()
);
