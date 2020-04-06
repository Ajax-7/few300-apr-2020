import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from './reducers';
import * as actions from './actions/game.actions';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
  }

  startTheGame() {
    this.store.dispatch(actions.gameStarted());
  }
}
