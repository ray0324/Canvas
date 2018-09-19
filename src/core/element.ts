import guid from './id';

type Context2DProps = 'fillStyle' | 'font' | 'globalAlpha' | 'lineCap' | 'lineWidth' | 'lineJoin' | 'miterLimit' | 'shadowBlur' | 'shadowColor' | 'strokeStyle' | 'textAlign' | 'textBaseline';

export interface IAttr extends Partial<Pick<CanvasRenderingContext2D, Context2DProps>> {
  lineDash?: number[];
  [key: string]: any;
}

export type IBoundary = {
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
  public attrs: IAttr;

  constructor(attrs?: IAttr) {
    if (attrs) this.attrs = Object.assign({}, this.attrs, attrs);
  }

  attr(): IAttr;
  attr<T extends keyof IAttr>(param: T): IAttr[T];
  attr(param: IAttr): void;
  attr<T extends keyof IAttr>(param: T, value: IAttr[T]): void;

  attr<T extends keyof IAttr>(param?: T | IAttr, value?: IAttr[T]): IAttr | IAttr[T] | void{
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

  applyAttrToContext(attrs?: IAttr) {
    if (!this.attrs && !attrs) return;
    // 优先级： 当前元素>父级元素定义的Attr(父级元素一般为Group)
    const context = {...attrs, ...this.attrs};
    [
      'fillStyle',
      'font',
      'globalAlpha',
      'lineCap',
      'lineWidth',
      'lineJoin',
      'miterLimit',
      'shadowBlur',
      'shadowColor',
      'strokeStyle',
      'textAlign'
    ].forEach((k: Context2DProps)=>{
      this.context[k] = context[k];
    })
    // 虚线
    context.lineDash && this.context.setLineDash(context.lineDash);
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