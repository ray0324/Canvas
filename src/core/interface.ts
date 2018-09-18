// CanvasRenderingContext2D的属性
type CanvasRenderingContext2DProperties = 'fillStyle' | 'font' | 'globalAlpha' | 'lineCap' | 'lineWidth' | 'lineJoin' | 'miterLimit' | 'shadowBlur' | 'shadowColor' | 'strokeStyle' | 'textAlign' | 'textBaseline';

export interface IAttr extends Partial<Pick<CanvasRenderingContext2D, CanvasRenderingContext2DProperties>> {
  lineDash: number[];
  [key:string]:any;
}

export interface IBoundary {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
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
  // 绘图环境
  context: CanvasRenderingContext2D;
  // 元素特性
  attrs: Partial<IAttr>;

  attr(): Partial<IAttr>;
  attr<T extends keyof IAttr>(name: T): IAttr[T];
  attr(name: Partial<IAttr>): void;
  attr<T extends keyof IAttr>(name: T, value: IAttr[T]): void;
  // 获取图形边界 类似Photoshop的图形控件
  getBoundary(): IBoundary;

  setContext(ctx: CanvasRenderingContext2D): void;

  saveContext():void;

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
