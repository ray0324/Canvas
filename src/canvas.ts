import Group from './core/group';
import { IAttr } from './core/element';

interface Config {
  width: number;
  height: number;
  widthCanvas: number;
  heightCanvas: number;
  pixelRatio: number;
  containerDOM: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export default class Canvas extends Group {

  width: number;
  height: number;
  widthCanvas: number;
  heightCanvas: number;
  pixelRatio: number;
  containerDOM: HTMLCanvasElement;

  constructor(config: Config, attr?: Partial<IAttr> ) {
    super();
    this.width = config.width;
    this.height = config.height;
    this.widthCanvas= config.widthCanvas;
    this.heightCanvas = config.heightCanvas;
    this.pixelRatio = config.pixelRatio;
    this.context = config.context;
  }

  clear() {

  }

  draw(){
    this.children.forEach(item=>{
      item.setContext(this.context);
      item.drawInner();
    });
  }
}