import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MusicState, selectSortingBy } from '../../reducers';
import { sortBy } from '../../actions/sort.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sort-selector',
  templateUrl: './sort-selector.component.html',
  styleUrls: ['./sort-selector.component.scss']
})
export class SortSelectorComponent implements OnInit {

  constructor(private store: Store<MusicState>) { }
  sortingBy$: Observable<'title' | 'artist'>;
  ngOnInit(): void {
    this.sortingBy$ = this.store.select(selectSortingBy);
  }

  sort(by: 'title' | 'artist') {
    this.store.dispatch(sortBy({ by }));
  }
}
