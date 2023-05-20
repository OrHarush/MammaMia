import { Player } from './Player';
import { canvas, canvasContext, keys } from './gameConsts';
import { Platform } from './Platform';

canvas.height = window.innerHeight - 65;
canvas.width = window.innerWidth;

const platform = new Platform();
const player = new Player();
player.update();

const animate = () => {
  requestAnimationFrame(animate);
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platform.draw();
  player.move();

  if (player.position.y + player.height <= platform.position.y) {
    player.velocity.y = 0;
  }
};

window.addEventListener('keyup', ({ key }) => {
  if (key === 'd') {
    keys.right.pressed = false;
  }
  if (key === 'a') {
    keys.left.pressed = false;
  }
});

window.addEventListener('keydown', ({ key }) => {
  if (key === 'w') {
    player.velocity.y -= 20;
  }
  if (key === 'd') {
    keys.right.pressed = true;
  }
  if (key === 'a') {
    keys.left.pressed = true;
  }
});

animate();
