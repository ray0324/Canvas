import Shape from '../core/shape';
import { IAttr } from '../core/element';

interface IText extends Partial<IAttr> {
  x: number;
  y: number;
}

export default class Text extends Shape {
  attrs: IText;

  constructor(attrs: IText) {
    super('text', { attrs });
    this.fillable = true;
  }

}