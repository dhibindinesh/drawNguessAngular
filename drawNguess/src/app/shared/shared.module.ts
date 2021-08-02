import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';



@NgModule({
  declarations: [
    WhiteboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WhiteboardComponent
  ]
})
export class SharedModule { }
