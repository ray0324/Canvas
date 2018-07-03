import { IAttr, IProp, IConfig, Iboundry, Ele } from './interface';

export class Element implements Ele {

  public attrs: Partial<IAttr> = {};
  public props: Partial<IProp> = {
    id: null,
    zIndex: null,
    parent: null,
    visible: true,
    destroyed: false,
    context: null,
  };

  constructor(config: IConfig = {}) {
    const { attrs, ...props } = config;
    if (attrs) this.attrs = Object.assign({}, this.attrs, attrs);
    this.props = Object.assign({}, this.props, props)
  }

  getProps(): Partial<IProp>
  getProps<T extends keyof IProp>(name: T): IProp[T]
  getProps<T extends keyof IProp>(name?: T) {
    if (name) {
      return this.props[name];
    }
    return this.props;
  }

  setProps(name: Partial<IProp>): void;
  setProps<T extends keyof IProp>(name: T, value: IProp[T]): void;
  setProps<T extends keyof IProp>(name: T, value?: IProp[T]): void {
    if (typeof name === 'string') {
      this.props[name] = value;
    }
    if (typeof name === 'object') {
      this.props = Object.assign({}, this.props, name);
    }
  }

  attr(): Partial<IAttr>;
  attr<T extends keyof IAttr>(name: T): IAttr[T];
  attr(name: Partial<IAttr>): void;
  attr<T extends keyof IAttr>(name: T, value: IAttr[T]): void;
  attr<T extends keyof IAttr>(param?: T | IAttr, value?: IAttr[T]) {
    // 无参数 返回当前类所有属性
    if (!param) {
      return this.attrs;
    }

    // 只有一个参数属性名 返回该属性值
    if (typeof param === 'string' && !value) {
      return this.attrs[param];
    }

    // 设置属性值
    if (typeof param === 'string') {
      this.attrs[param] = value;
      return;
    }

    // 设置属性值
    if (typeof param === "object") {
      this.attrs = Object.assign({}, this.attrs, param);
      return;
    }
  }

  getParent(): Ele {
    return this.props.parent;
  }

  getContext() {
    return this.props.context;
  }

  // 获取图形边界
  getBoundry(): Iboundry {
    return {
      top: null,
      right: null,
      bottom: null,
      left: null
    }
  }

  saveContext() {
    this.props.context.save();
  }

  setContext(ctx: CanvasRenderingContext2D) {
    this.props.context = ctx;
  }

  restoreContext() {
    this.props.context.restore();
  }

  drawInner() { }

  createPath() { };
}

let t = new Element();