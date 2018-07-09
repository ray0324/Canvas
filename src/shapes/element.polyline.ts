import Shape from '../core/shape';
import { IAttr, Point } from '../core/interface';

interface IPolyLine extends Partial<IAttr> {
  p: Point[]
}

export default class PolyLine extends Shape {
  attrs: IPolyLine;
  
  constructor(attrs: IPolyLine) {
    super('line', { attrs });
    this.canFill = true;
  }

  createPath() {
    const { p } = this.attrs;
    this.context.beginPath();
    this.context.moveTo(p[0].x,p[0].y);
    for(let i = 1;i<p.length;i++){
      this.context.lineTo(p[i].x,p[i].y)
    }
    console.log('create-polyLine-path');
  }
}