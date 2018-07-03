import { Element } from './element';
import {IConfig } from'./interface';
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

  drawInner() {
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