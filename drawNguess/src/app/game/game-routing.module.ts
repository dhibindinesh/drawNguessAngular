import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './game-view/game-view.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: 'login', component: AuthComponent, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', canActivate: [], component: GameViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
