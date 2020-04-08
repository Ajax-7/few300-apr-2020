import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { SortSelectorComponent } from './components/sort-selector/sort-selector.component';
import { EffectsModule } from '@ngrx/effects';
import { SortEffects } from './effects/sort.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AppEffects } from './effects/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { SongEffects } from './effects/song.effects';
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
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppEffects, SortEffects, SongEffects]),
    ReactiveFormsModule
  ]
})
export class MusicModule { }
