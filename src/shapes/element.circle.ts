import Shape from '../core/shape';
import {IAttr} from '../core/interface';

interface ICircle extends Partial<IAttr> {
  x: number,
  y: number,
  r: number
}

export default class Circle extends Shape {
  attrs: ICircle = {
    x: null,
    y: null,
    r: null,
    lineWidth: 1
  }

  constructor(attrs: ICircle) {
    super('circle', { attrs });
  }

  createPath() {
    const { x, y, r } = this.attrs;
    const ctx = this.context;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    console.log('create-circle-path');
  }

  attr<T extends Partial<ICircle>, U extends keyof ICircle>(param?: T | U, value?: T[U]) {
    // 无参数 返回当前类所有属性
    if (arguments.length === 0) {
      return this.attrs;
    }
    // 只有一个参数
    if (arguments.length === 1 && typeof param === 'string') {
      return this.attrs[param];
    }
    // 一个参数 参数为object
    if (arguments.length === 1 && typeof param === 'object') {
      this.attrs = Object.assign({}, this.attrs, param);
      return;
    }
    // 两个参数
    if (arguments.length === 2 && typeof param === 'string') {
      this.attrs[param] = value;
    }
  }
}