import Shape from '../core/shape';
import { IAttr, Point, IBoundary } from '../core/element';

interface IPolyLine extends Partial<IAttr> {
  p: Point[]
}

export default class PolyLine extends Shape {
  attrs: IPolyLine;
  
  constructor(attrs: IPolyLine) {
    super('line', attrs);
    this.fillable = true;
  }

  getBoundary() {
    const { p } = this.attrs;
    const initialValue: IBoundary = super.getBoundary();
    return p.reduce((prev,cur)=>{
      return {
        minX: prev.minX === null ? cur.x : Math.min(prev.minX,cur.x),
        maxX: prev.maxX === null ? cur.x : Math.max(prev.maxX, cur.x),
        minY: prev.minY === null ? cur.x : Math.min(prev.minY, cur.y),
        maxY: prev.maxY === null ? cur.x : Math.max(prev.maxY, cur.y),
      }
    },initialValue)
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