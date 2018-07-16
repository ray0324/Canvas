import Shape from '../core/shape';
import { IAttr } from '../core/interface';

interface IRect extends Partial<IAttr> {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class Rect extends Shape {
  attrs: IRect;

  constructor(attrs: IRect) {
    super('rect', { attrs });
    this.canFill = true;
  }

  createPath() {
    const { x, y, width, height } = this.attrs;
    this.context.beginPath();
    this.context.moveTo(x,y);
    this.context.lineTo(x+width,y);
    this.context.lineTo(x+width,y+height);
    this.context.lineTo(x,y+height);
    this.context.closePath();
    console.log('create-rect-path');
  }
}