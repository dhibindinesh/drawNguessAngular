import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { io } from "socket.io-client";
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  @ViewChild('game')
  private game_canvas: ElementRef
  private game_context: any
  private socket;

  constructor() { }

  ngOnInit(): void {
    this.socket = io("http://localhost:3000")
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.game_context = this.game_canvas.nativeElement.getContext("2d")
    this.socket.on("position", position => {
      console.log("position", position)
      this.game_context.clearRect(0, 0, this.game_canvas.nativeElement.width, this.game_canvas.nativeElement.height)
      this.game_context.fillRect(position.x, position.y, 20, 20)
    })

  }

  public move(direction: string) {
    this.socket.emit("move", direction)
  }
}
