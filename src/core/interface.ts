export interface IAttr {
  fillStyle: string;
  font: string;
  globalAlpha: number;
  lineCap: string;
  lineWidth: number;
  lineJoin: string;
  miterLimit: number;
  shadowBlur: number;
  shadowColor: string;
  strokeStyle: string;
  textAlign: string;
  textBaseline: string;
  lineDash: number[];
  [key:string]:any;
}

export interface IBoundary {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IProp {
  id: number;
  zIndex: number;
  visible: boolean;
  destroyed: boolean;
  parent: IElement,
  context: CanvasRenderingContext2D;
}

export interface IElement {
  // 元素id
  id: number;
  // 层级
  zIndex: number;
  // 可见性
  visible: boolean;
  // 是否销毁
  destroyed: boolean;
  // 父级元素
  parent: IElement;
  // 元素边界
  boundary: IBoundary;
  // 绘图环境
  context: CanvasRenderingContext2D;
  // 元素特性
  attrs: Partial<IAttr>;

  attr(): Partial<IAttr>;
  attr<T extends keyof IAttr>(name: T): IAttr[T];
  attr(name: Partial<IAttr>): void;
  attr<T extends keyof IAttr>(name: T, value: IAttr[T]): void;

  getContext(): CanvasRenderingContext2D;


  saveContext():void;

  setContext(ctx: CanvasRenderingContext2D): void;

  restoreContext():void;

  drawInner():void;

  createPath():void;

}

export interface IConfig extends Partial<IProp> {
  attrs?: Partial<IAttr>
}

export type Point = {
  x: number;
  y: number;
}
