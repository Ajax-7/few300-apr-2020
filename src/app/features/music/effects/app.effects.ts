// Turn app actions into music actions

import { Injectable } from '@angular/core';
import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/song.actions';
import * as sortActions from '../actions/sort.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  sendErrorToApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.songAddedFailure),
      map(err => appActions.applicationFeatureError({ feature: 'music', errorMessage: err.errorMessage }))
    )
  );

  loadSortBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => sortActions.loadSortBy())
    )
  );

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songActions.loadSongs())
    )
  );

  constructor(private actions$: Actions) { }
}
