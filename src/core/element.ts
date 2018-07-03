import {
  IElement,
  IAttr,
  IConfig,
  IBoundary
} from './interface';
import guid from './id';

export class Element implements IElement {
  id: number;
  zIndex: number;
  visible: boolean;
  destroyed: boolean;
  parent: IElement;
  context: CanvasRenderingContext2D;
  attrs: Partial<IAttr>;
  boundary: IBoundary;

  constructor(config: IConfig = {}) {
    const { attrs } = config;
    if (attrs) this.attrs = Object.assign({}, this.attrs, attrs);
    this.id = guid();
    this.zIndex = null;
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

  getContext(){
    return this.context;
  }

  saveContext() {
    this.context.save();
  }

  setContext(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
  }

  restoreContext() {
    this.context.restore();
  }

  drawInner() { }

  createPath() { };
}