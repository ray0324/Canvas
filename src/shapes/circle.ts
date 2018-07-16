import Shape from '../core/shape';
import {IAttr} from '../core/interface';

interface ICircle extends Partial<IAttr> {
  x: number;
  y: number;
  r: number;
}

export default class Circle extends Shape {
  attrs: ICircle;

  constructor(attrs: ICircle) {
    super('circle', { attrs });
    this.canFill = true;
  }

  createPath() {
    const { x, y, r } = this.attrs;
    this.context.beginPath();
    this.context.arc(x, y, r, 0, Math.PI * 2, false);
    console.log('create-circle-path');
  }
}