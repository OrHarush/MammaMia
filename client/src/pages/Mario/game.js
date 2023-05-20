import { Player } from './Player';
import { canvas, canvasContext } from './gameConsts';

canvas.height = window.innerHeight - 65;
canvas.width = window.innerWidth;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

const player = new Player();
player.update();

const animate = () => {
  requestAnimationFrame(animate);
  canvasContext.clearRect(0, 0, canvas.height, canvas.width);
  player.update();

  if (keys.right.pressed) {
    player.velocity.x = 5;
  } else if (keys.left.pressed) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
};

animate();

const keyActions = { w: (player.velocity.y -= 20) };

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
