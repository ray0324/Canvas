import { IConfig } from './core/interface';
import Group from './core/group';

interface ICanvasCfg extends IConfig{
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

  constructor(config: ICanvasCfg ) {
    super(config);
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