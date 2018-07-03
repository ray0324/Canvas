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
}

export interface Iboundry {
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
  parent: Ele,
  context: CanvasRenderingContext2D;
}

export interface Ele {
  attrs: Partial<IAttr>;
  props: Partial<IProp>;

  getProps(): Partial<IProp>;
  getProps<T extends keyof IProp>(name: T): IProp[T];

  setProps(name: Partial<IProp>): void;
  setProps<T extends keyof IProp>(name: T, value: IProp[T]): void;

  attr(): Partial<IAttr>;
  attr<T extends keyof IAttr>(name: T): IAttr[T];
  attr(name: Partial<IAttr>): void;
  attr<T extends keyof IAttr>(name: T, value: IAttr[T]): void;

  getParent(): Ele;

  getContext(): CanvasRenderingContext2D;

  getBoundry(): Iboundry;

  saveContext(): void;

  setContext(ctx: CanvasRenderingContext2D): void;

  restoreContext(): void;

  drawInner(): void;

  createPath(): void;

}

export interface IConfig extends Partial<IProp> {
  attrs?: Partial<IAttr>
}