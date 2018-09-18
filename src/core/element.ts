import guid from './id';
type Context2DProps = 'fillStyle' | 'font' | 'globalAlpha' | 'lineCap' | 'lineWidth' | 'lineJoin' | 'miterLimit' | 'shadowBlur' | 'shadowColor' | 'strokeStyle' | 'textAlign' | 'textBaseline';

export interface IAttr extends Partial<Pick<CanvasRenderingContext2D, Context2DProps>> {
  lineDash?: number[];
  [key: string]: any;
}

export interface IBoundary {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export type Point = {
  x: number;
  y: number;
}

export class Element {
  // 元素ID
  public id: number = guid();
  // 元素层级
  public zIndex: number = 0;
  // 元素可见性
  public visible: boolean = true;
  // 元素是否销毁
  public destroyed: boolean = false;
  // 父元素
  public parent: Element = null;
  // 绘图环境
  public context: CanvasRenderingContext2D = null;
  // 元素特性
  public attrs: Partial<IAttr>;

  constructor(attrs?: Partial<IAttr>) {
    if (attrs) this.attrs = Object.assign({}, this.attrs, attrs);
  }

  attr(): Partial<IAttr>;
  attr<T extends keyof IAttr>(param: T): IAttr[T];
  attr(param: Partial<IAttr>): void;
  attr<T extends keyof IAttr>(param: T, value: IAttr[T]): void;

  attr<T extends keyof IAttr>(param?: T | Partial<IAttr>, value?: IAttr[T]): Partial<IAttr> | IAttr[T] | void{
    // 无参数 返回当前类所有属性
    if (arguments.length === 0 ) {
      return this.attrs;
    }
    // 只有一个参数
    if(arguments.length === 1 && typeof param === 'string'){
      return this.attrs[param];
    }
    // 一个参数 参数为object
    if (arguments.length === 1 && typeof param ==='object'){
      this.attrs = Object.assign({}, this.attrs, param);
      return;
    }
    // 两个参数
    if(arguments.length === 2 && typeof param === 'string'){
      this.attrs[param] = value;
    }
  }

  getBoundary():IBoundary {
    return {
      minX: null,
      minY: null,
      maxX: null,
      maxY: null
    };
  }

  getContext() {
    return this.context;
  }

  applyAttrToContext() {
    // console.log('this',this);
    if (!this.attrs) return;
    // debugger;
    const ctx = this.context;
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
  }

  setContext(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
  }

  saveContext() {
    this.context.save();
  }

  restoreContext() {
    this.context.restore();
  }

  drawInner() { }

  createPath() { };
}