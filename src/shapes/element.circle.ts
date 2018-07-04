import Shape from '../core/shape';
import {IAttr} from '../core/interface';

export default class Circle extends Shape {
  attrs: Partial<IAttr>;

  constructor(attrs: Partial<IAttr>) {
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