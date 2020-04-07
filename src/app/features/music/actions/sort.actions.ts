import { createAction, props } from '@ngrx/store';

export const sortBy = createAction(
  '[music] song sort set',
  props<{ by: 'title' | 'artist' }>()
);
