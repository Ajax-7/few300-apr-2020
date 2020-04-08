import { Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../../../environments/environment'; // never import any other environment but this one.
import * as songActions from '../actions/song.actions';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SongEntity } from '../reducers/songs.reducer';
import { Action } from '@ngrx/store';
@Injectable()
export class SongEffects {

  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.songAdded),
      switchMap((originalAction) => this.client.post<SongEntity>(environment.songsUrl, {
        title: originalAction.payload.title,
        artist: originalAction.payload.artist,
        album: originalAction.payload.album,
        year: originalAction.payload.year
      }).pipe(
        map(addedSong => songActions.songAddedSuccessfully({ oldId: originalAction.payload.id, payload: addedSong })),
        catchError(r => of(songActions.songAddedFailure({
          errorMessage: 'You did NOT try to add THAT band, did you?',
          payload: originalAction.payload
        })))

      ))
    ), { dispatch: true }
  );

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.loadSongs),
      switchMap(() => this.client.get<{ data: SongEntity[] }>(environment.songsUrl)
        .pipe(
          map(response => response.data),
          map(songs => songActions.loadedSongSuccessfully({ payload: songs }))
        )
      )
    ), { dispatch: true }

  );
  constructor(private actions$: Actions, private client: HttpClient) {
    if (!environment.production) {
      console.log('Created the SongEffects');
      console.log('Going to use the url of ', environment.songsUrl);
    }
  }
}
