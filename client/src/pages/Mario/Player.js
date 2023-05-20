import { canvas, canvasContext, gravity, keys } from './gameConsts';

export class Player {
  constructor() {
    this.position = {
      x: 0,
      y: canvas.height - 150,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 100;
    this.height = 150;
  }

  move() {
    if (keys.right.pressed) {
      this.velocity.x = 5;
    } else if (keys.left.pressed) {
      this.velocity.x = -5;
    } else {
      this.velocity.x = 0;
    }
  }

  draw() {
    canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    if (this.position.x + this.velocity.x <= 0) {
      this.velocity.x = 0;
    } else if (this.position.x + this.width >= canvas.width) {
      console.log('bigger than canvas');
      this.velocity.x = 0;
    } else {
      this.position.x += this.velocity.x;
    }

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.y + this.velocity.y <= 0) {
      this.velocity.y = 0;
    } else {
      this.position.y += this.velocity.y;
    }
  }
}
