import Canvas from './canvas';
import Circle from './shapes/index'

var canvas = <HTMLCanvasElement>document.querySelector('#c');

var ctx =  canvas.getContext('2d');

// ctx.fillStyle=undefined;
// ctx.globalAlpha = undefined

// console.log(ctx.fillStyle);
// console.log(ctx.globalAlpha);
// console.log(ctx);


// ctx.fillStyle = this.attrs.fillStyle;
// ctx.font = this.attrs.font;
// ctx.globalAlpha = this.attrs.globalAlpha;
// ctx.lineCap = this.attrs.lineCap;
// ctx.lineWidth = this.attrs.lineWidth;
// ctx.lineJoin = this.attrs.lineJoin;
// ctx.miterLimit = this.attrs.miterLimit;
// ctx.shadowBlur = this.attrs.shadowBlur;
// ctx.shadowColor = this.attrs.shadowColor;
// ctx.strokeStyle = this.attrs.strokeStyle;
// ctx.textAlign = this.attrs.textAlign;


var can = new Canvas({
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
  lineWidth: 1,
  strokeStyle: 'red'
})

let c2 = new Circle({
  x: 100,
  y: 200,
  r: 40,
  lineWidth: 1,
  strokeStyle: 'red',
  fillStyle:'red'
})


can.addShape(c1);
can.addShape(c2);
console.log(can);

// can.addShape(c1);
// console.log(can);
can.draw();
c1.attr('strokeStyle', 'blue');
// c1.attr('strokeStyle', 'blue');

/*



console.log(c1.attr('x'));
c1.attr('strokeStyle','red');

let c2 = new Circle({
  x: 300,
  y: 200,
  r: 40,
  lineWidth: 1,
  strokeStyle:'green',
  fillStyle:'green'
})
let c3 = new Circle({
  x: 300,
  y: 300,
  r: 40,
  lineWidth: 1,
  strokeStyle:'blue',
});

let l1 =  new Line({
  start:{
    x:10.5,
    y:10.5
  },
  end:{
    x:10.5,
    y:390.5
  },
  strokeStyle: 'orange',
  lineDash: [5, 10]
})
let l2 =  new Line({
  start:{
    x:10.5,
    y:10.5
  },
  end:{
    x:390.5,
    y:10.5
  },
  strokeStyle: 'orange',
  // lineDash: [5,10]
});

let l3 =  new Line({
  start:{
    x:390.5,
    y:10.5
  },
  end:{
    x:390.5,
    y:390.5
  },
  strokeStyle: 'orange'
})
let l4 =  new Line({
  start:{
    x:10.5,
    y: 390.5
  },
  end:{
    x:390.5,
    y:390.5
  },
  strokeStyle: 'orange'
})

let g = new Group();

g.addShape(c3);

canvas.addGroup(g);
canvas.addShape(c1);
canvas.addShape(c2);
g.addShape(l1);
g.addShape(l2);
g.addShape(l3);
g.addShape(l4);


canvas.draw();

console.log(canvas);

*/
