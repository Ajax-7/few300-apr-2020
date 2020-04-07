import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as sortActions from '../actions/sort.actions';

import * as appActions from '../../../actions/app.actions';
import { tap, map, filter } from 'rxjs/operators';
@Injectable()
export class SortEffects {

  loadSortPreferences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')), // -> title, author | null
      filter(by => by !== null),
      filter(by => by === 'title' || by === 'author'), // validate the stuff.
      map(by => by as 'title' | 'artist'), //
      map(by => sortActions.sortBy({ by })) // action
    )
    , { dispatch: true });

  saveSortPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sortActions.sortBy),
      tap(action => localStorage.setItem('by', action.by))
    ), { dispatch: false }
  );


  constructor(private actions$: Actions) { }

}
