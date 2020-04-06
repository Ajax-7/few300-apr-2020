import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState, selectGameWon } from './reducers';
import * as actions from './actions/game.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  youWin$: Observable<boolean>;
  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.youWin$ = this.store.select(selectGameWon);
  }

  startTheGame() {
    this.store.dispatch(actions.gameStarted());
  }
  takeAGuess(guessEl: HTMLInputElement) {
    const guess = guessEl.valueAsNumber;
    this.store.dispatch(actions.tookAGuess({ guess }));
    guessEl.value = '';
    guessEl.focus();
  }
}
