import { createAction, props } from '@ngrx/store';

export const sortBy = createAction(
  '[music] song sort set',
  props<{ by: 'title' | 'artist' }>()
);

export const loadSortBy = createAction(
  '[music] load sort by'
);
