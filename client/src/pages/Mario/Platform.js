import { canvasContext } from './gameConsts';

export class Platform {
  constructor() {
    this.position = {
      x: 200,
      y: 200,
    };
    this.width = 200;
    this.height = 20;
  }

  draw() {
    canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
