import { Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../../../environments/environment'; // never import any other environment but this one.
import * as songActions from '../actions/song.actions';
import { switchMap, map } from 'rxjs/operators';
import { SongEntity } from '../reducers/songs.reducer';
@Injectable()
export class SongEffects {

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
