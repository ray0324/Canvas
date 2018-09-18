import Canvas from '../canvas';
import { Circle, PolyLine, Rect } from '../shapes/index';
import Group from '../core/group';

var dom = <HTMLCanvasElement>document.querySelector('#c');

var ctx = dom.getContext('2d');

var canvas = new Canvas({
  width: 600,
  height: 400,
  widthCanvas: 600,
  heightCanvas: 400,
  pixelRatio: 1,
  containerDOM: <HTMLCanvasElement>document.querySelector('#c'),
  context: ctx,
})

// console.log(canvasObj);
let c1 = new Circle({
  x: 200,
  y: 200,
  r: 40,
  lineWidth: 5,
  strokeStyle: 'red'
})

let c2 = new Circle({
  x: 100,
  y: 200,
  r: 40,
  lineWidth: 1,
  strokeStyle: 'red',
  fillStyle: 'red'
})

let rect = new Rect({
  x: 110,
  y: 110,
  width: 300,
  height: 200
});

let p1 = new PolyLine({
  p: [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
    { x: 10, y: 100 },
    { x: 120, y: 10 },
    { x: 220, y: 310 },
    { x: 120, y: 330 }
  ],
  strokeStyle: 'red'
})
console.log(c1);

console.log(p1)
p1.attr()

let g = new Group();
console.log(g)
g.addShape(c1);
canvas.addGroup(g);

// g.addShape(p1);


// canvas.addShape(c1);
// canvas.addShape(p1);
canvas.addShape(c2);
// canvas.addShape(rect);
// canvas.addGroup(g);
// console.log(canvas);
// console.log(canvas.getBoundary());

canvas.draw();
// c1.attr('strokeStyle', 'blue');

console.log(canvas);
