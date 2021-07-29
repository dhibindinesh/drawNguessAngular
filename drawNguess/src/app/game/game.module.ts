import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { GameViewComponent } from './game-view/game-view.component';


@NgModule({
  declarations: [
    GameComponent,
    LobbyComponent,
    GameViewComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
