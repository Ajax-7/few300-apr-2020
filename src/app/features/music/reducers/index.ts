import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSongs from './songs.reducer';
import * as fromSongSort from './songs-sort.reducer';
import * as fromUiHints from './ui-hints.reducer';

import { SongListModel } from '../models';
export const featureName = 'musicFeature';

export interface MusicState {
  songs: fromSongs.SongState;
  sort: fromSongSort.SongsSortState;
  uiHints: fromUiHints.UiHintsState;

}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  sort: fromSongSort.reducer,
  uiHints: fromUiHints.reducer,

};

// 1. Feature selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);
// 2. Selector per branch
const selectSongsBranch = createSelector(selectMusicFeature, f => f.songs);
const selectSongsSortBranch = createSelector(selectMusicFeature, f => f.sort);
const selectUiHintsBranch = createSelector(selectMusicFeature, f => f.uiHints);

// 3. Helpers
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. For the components.

// TODO: SongListModel[] for the SongListComponent

export const selectSongsLoaded = createSelector(selectUiHintsBranch, b => b.songsLoaded);
export const selectSortingBy = createSelector(selectSongsSortBranch, b => b.sortBy);

export const selectSongListModel = createSelector(
  selectSongEntityArray,
  selectSortingBy,
  (songs, by) => {
    return [...songs.sort((lhs: fromSongs.SongEntity, rhs: fromSongs.SongEntity) => {
      if (lhs[by].toLocaleLowerCase() < rhs[by].toLocaleLowerCase()) {
        return -1;
      }
      if (lhs[by].toLocaleLowerCase() > rhs[by].toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    })] as SongListModel[];
  }
);
