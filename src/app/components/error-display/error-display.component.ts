import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectHasErrors, selectErrorMessage } from 'src/app/reducers';
import { clearApplicationFeatureError } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.select(selectHasErrors);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }
  clear() {
    this.store.dispatch(clearApplicationFeatureError());
  }
}
