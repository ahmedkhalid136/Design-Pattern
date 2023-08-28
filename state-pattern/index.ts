import { Brush } from "./Brush";
import { Canvas } from "./Canvas";
import { Selection } from "./Selection";

const brush = new Brush();

const selection = new Selection();

const canvas = new Canvas();

canvas.setCursor(selection);

console.log(canvas.mouseUp());
console.log(canvas.mouseDown());

canvas.setCursor(brush);

console.log(canvas.mouseUp());
console.log(canvas.mouseDown());
