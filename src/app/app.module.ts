import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { GameModule } from './features/game/game.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { MusicModule } from './features/music/music.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    MusicModule, // PUT ROUTING MODULES BEFORE APP ROUTING MODULE
    AppRoutingModule,
    GameModule, // sort of like setting a reference to a DLL in c#,
    StoreModule.forRoot(reducers), // "CombineReducers"
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
