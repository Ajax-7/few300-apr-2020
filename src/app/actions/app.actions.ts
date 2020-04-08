import { createAction, props } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] APPLICATION_STARTED'
);

export const applicationFeatureError = createAction(
  '[app] application feature error',
  props<{ feature: string, errorMessage: string }>()
);

export const clearApplicationFeatureError = createAction(
  '[app] clear application feature error'
);
