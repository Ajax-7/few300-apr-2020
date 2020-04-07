import { Component, OnInit } from '@angular/core';
import { SongListModel } from '../../models';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  model: SongListModel[] = [
    { id: '1', title: 'Whip It', artist: 'DEVO', album: 'Freedom of Choice', year: 1986 },
    { id: '2', title: 'Prelude', artist: 'Dick Wagner', album: 'Parsifal', year: 1863 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
