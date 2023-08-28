import { Tool } from "./Tool";

export class Selection implements Tool {
  mouseDown() {
    console.log("Selection MouseDown");
  }
  mouseUp() {
    console.log("Draw a Selection Line");
  }
}
