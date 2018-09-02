import { Element } from './element';
import { IConfig } from './interface';

export default class Shape extends Element {
  // 图形类型
  protected type: string;
  // 描边
  protected canStroke: boolean = true;
  // 填充
  protected canFill: boolean = false;

  constructor(type: string, config: IConfig= {}) {
    super(config);
    this.type = type;
  }

  drawInner() {
    // console.log('this');
    if (this.destroyed) {
      return;
    }
    if (this.visible) {
      const ctx = this.context;
      ctx.save();
      this.createPath();
      ctx.fillStyle = this.attrs.fillStyle;
      ctx.font = this.attrs.font;
      ctx.globalAlpha = this.attrs.globalAlpha;
      ctx.lineCap = this.attrs.lineCap;
      ctx.lineWidth = this.attrs.lineWidth;
      ctx.lineJoin = this.attrs.lineJoin;
      ctx.miterLimit = this.attrs.miterLimit;
      ctx.shadowBlur = this.attrs.shadowBlur;
      ctx.shadowColor = this.attrs.shadowColor;
      ctx.strokeStyle = this.attrs.strokeStyle;
      ctx.textAlign = this.attrs.textAlign;
      this.attrs.lineDash && ctx.setLineDash(this.attrs.lineDash);
      if (this.canFill && this.attrs.fillStyle) {
        ctx.fill();
      }
      if (this.canStroke) {
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}