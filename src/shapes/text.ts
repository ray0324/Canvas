import Shape from '../core/shape';
import { IAttr } from '../core/interface';

interface IText extends Partial<IAttr> {
  x: number;
  y: number;
  // text: string;
  // font: string;
  // fontSize: number;
  // fontFamily: string;
  // fontStyle: string;
  // fontWeight: string;
  // fontVariant: string;
  // textAlign: 'left' | 'right' | 'center' | 'start' | 'end';
  // textBaseline: string;
  // lineHeight: null;
  // textArr: null;
}

export default class Text extends Shape {
  attrs: IText;

  constructor(attrs: IText) {
    super('text', { attrs });
    this.canFill = true;
  }

  getBoundary() {
    const { x, y, width, height } = this.attrs;
    return {
      minX: x,
      maxX: x + width,
      minY: y,
      maxY: y + height
    }
  }

  createPath() {
    const { x, y, width, height } = this.attrs;
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x + width, y);
    this.context.lineTo(x + width, y + height);
    this.context.lineTo(x, y + height);
    this.context.closePath();
    console.log('create-rect-path');
  }
}