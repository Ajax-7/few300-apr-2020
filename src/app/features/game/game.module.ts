import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';




@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [GameComponent]
})
export class GameModule { }
