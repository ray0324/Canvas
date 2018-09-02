import { Element } from './element';
import { IBoundary, IConfig } from'./interface';
import Shape from './shape';

export default class Group extends Element {

  children: Array<Element> = [];

  constructor(config: IConfig = {}) {
    super(config);
  }

  addShape(shape: Shape) {
    shape.parent = this;
    this.children.push(shape);
  }

  addGroup(group: Group = new Group()) {
    group.parent = this;
    this.children.push(group);
  }

  sort() {
    this.children.sort((a, b) => {
      return a.zIndex - b.zIndex;
    });
  }

  getBoundary() {
    return this.children.reduce((prev, cur) => {
      const boundary = cur.getBoundary();
      return {
        minX: prev.minX === null ? boundary.minX : Math.min(prev.minX, boundary.minX),
        maxX: prev.maxX === null ? boundary.maxX : Math.max(prev.maxX, boundary.maxX),
        minY: prev.minY === null ? boundary.minY : Math.min(prev.minY, boundary.minY),
        maxY: prev.maxY === null ? boundary.maxY : Math.max(prev.maxY, boundary.maxY),
      }
    },super.getBoundary())
  }

  drawInner() {
    console.log(this.getBoundary())
    if (this.destroyed) {
      return;
    }
    if (this.visible) {
      this.children.forEach((item: Group | Shape) => {
        item.setContext(this.context);
        item.drawInner();
      });
    }
  }
}