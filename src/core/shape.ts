import { Element, IAttr } from './element';

export default class Shape extends Element {
  // 图形类型
  protected shapetype: string;
  // 可描边
  protected canStroke: boolean = true;
  // 可填充
  protected fillable: boolean = false;

  constructor(type: string, attrs: IAttr) {
    super(attrs);
    this.shapetype = type;
  }

  drawInner() {
    if (this.destroyed) {
      return;
    }
    if (this.visible) {
      this.saveContext();
      console.log('<shape>');
      this.applyAttrToContext(this.attrs);
      this.createPath();
      if (this.fillable && this.attrs.fillStyle) {
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