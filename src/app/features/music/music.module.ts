import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { SortSelectorComponent } from './components/sort-selector/sort-selector.component';

const routes: Routes = [
  {
    path: 'music',
    component: MusicComponent,
    children: [
      {
        path: 'songs',
        component: SongListComponent
      },
      {
        path: 'new-song',
        component: SongEntryComponent
      }
    ]
  }
];

@NgModule({
  declarations: [MusicComponent, SongListComponent, SongEntryComponent, SortSelectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class MusicModule { }
