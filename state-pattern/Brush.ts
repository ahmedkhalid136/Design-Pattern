import { Tool } from "./Tool";

export class Brush implements Tool {
  mouseDown() {
    console.log("Brush MouseDown");
  }
  mouseUp() {
    console.log("Draw a Brush Line");
  }
}
