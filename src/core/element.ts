import {
  IElement,
  IAttr,
  IConfig,
  IBoundary
} from './interface';
import guid from './id';

export class Element implements IElement {
  // 元素ID
  public id: number = guid();
  // 元素层级
  public zIndex: number = 0;
  // 元素可见性
  public visible: boolean = true;
  // 元素是否销毁
  public destroyed: boolean = false;
  // 父元素
  public parent: IElement = null;
  // 绘图环境
  public context: CanvasRenderingContext2D = null;
  // 元素特性
  public attrs: Partial<IAttr> = {};
  // 元素边界
  public boundary: IBoundary = {
    minX: null,
    minY: null,
    maxX: null,
    maxY: null
  };

  constructor(config: IConfig = {}) {
    const { attrs } = config;
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

  getBoundary(){
    return this.boundary;
  }

  setBoundary(){ }

  getContext() {
    return this.context;
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