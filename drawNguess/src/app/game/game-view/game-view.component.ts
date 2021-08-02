import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardOptions, CanvasWhiteboardService, } from 'ng2-canvas-whiteboard';
import { io } from "socket.io-client";
@Component({
  selector: 'app-game-view',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],

})
export class GameViewComponent implements OnInit {
  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    fillColorPickerText: "Fill",
    strokeColorPickerText: "Stroke",
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 5,
    strokeColor: "rgb(0,0,0)",
    shouldDownloadDrawing: true
  };
  // @ViewChild('canvasWhiteboard')
  // private game_canvas: ElementRef
  // private game_context: any
  private socket;

  constructor(private _canvasWhiteboardService: CanvasWhiteboardService) { }

  ngOnInit(): void {
    this.socket = io("http://localhost:3000")
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.game_context = this.game_canvas.nativeElement.getContext("2d")
    this.socket.on("canvas", batch_updates => {
      console.log(batch_updates)
      if (batch_updates != null) {
        this._canvasWhiteboardService.drawCanvas(batch_updates);
      }

    })

  }


  sendBatchUpdate(e) {
    // console.log('sendBatchUpdate', e)
    this.socket.emit("draw", e)
  }
  onCanvasClear() {
    console.log('onCanvasClear')
  }
  onCanvasUndo(e) {
    console.log('onCanvasUndo', e)
  }
  onCanvasRedo(e) {
    console.log('onCanvasRedo', e)
  }

}
