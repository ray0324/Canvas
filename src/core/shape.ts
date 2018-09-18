import { Element, IAttr } from './element';

export default class Shape extends Element {
  // 图形类型
  protected type: string;
  // 可描边
  protected canStroke: boolean = true;
  // 可填充
  protected fillable: boolean = false;

  constructor(type: string, attrs: Partial<IAttr>) {
    super(attrs);
    this.type = type;
  }

  drawInner() {
    if (this.destroyed) {
      return;
    }
    if (this.visible) {
      this.saveContext();
      console.log('<shape>')
      this.applyAttrToContext();
      this.createPath();
      if (this.fillable) {
        this.getContext().fill();
      }
      if (this.canStroke) {
        this.getContext().stroke();
      }
      console.log('</shape>')
      this.getContext().restore();
    }
  }
}