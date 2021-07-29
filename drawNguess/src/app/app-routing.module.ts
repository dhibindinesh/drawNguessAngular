import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: 'login', component: AuthComponent, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', canActivate: [], component: GameComponent, loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
