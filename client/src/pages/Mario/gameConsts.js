export const canvas = document.querySelector('canvas');
export const canvasContext = canvas.getContext('2d');
export const gravity = 0.5;
export const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
