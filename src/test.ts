
interface Attr {
  fillStyle: string | CanvasGradient | CanvasPattern;
  font: string;
  globalAlpha: number;
  lineCap: string;
  lineWidth: number;
  lineJoin: string;
  miterLimit: number;
  shadowBlur: number;
  shadowColor: string;
  strokeStyle: string;
  textAlign: string;
  textBaseline: string;
  lineDash: string;
}

const element: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('#c');
const ctx: CanvasRenderingContext2D = element.getContext('2d');

let attr:Partial<Attr> = {
  fillStyle: 'red',
  globalAlpha: 0.8
}

// function setAttrs(target: CanvasRenderingContext2D, attr: Partial<Attr>) {
//   for (let p in attr) {
//     target[p] = attr[p];
//   }
// }


