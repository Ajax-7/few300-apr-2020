import { Component, OnInit } from '@angular/core';
import { SongListModel } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MusicState, selectSongListModel, selectSongsLoaded } from '../../reducers';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  loaded$: Observable<boolean>;
  model$: Observable<SongListModel[]>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectSongListModel);
    this.loaded$ = this.store.select(selectSongsLoaded);
  }

}
