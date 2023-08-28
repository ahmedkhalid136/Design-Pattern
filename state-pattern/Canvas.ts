import { Brush } from "./Brush";
import { Tool } from "./Tool";

export class Canvas {
  private cursor: Tool;

  constructor() {
    this.cursor = new Brush();
  }

  mouseDown() {
    this.cursor.mouseDown();
  }

  mouseUp() {
    this.cursor.mouseUp();
  }

  setCursor(cursor: Tool) {
    this.cursor = cursor;
  }
}
