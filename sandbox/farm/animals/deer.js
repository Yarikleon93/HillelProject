import { Animal } from './animal.js';

export class Deer extends Animal {
  pixels = [
    { x: 0, y: -5 },
    { x: -1, y: -6 },
    { x: -1, y: -5 },
    { x: -1, y: -4 },
    { x: 2, y: -6 },
    { x: 2, y: -5 },
    { x: 2, y: -4 },
    { x: 3, y: -5 },

    { x: -3, y: 0 },
    { x: -3, y: 1 },
    { x: -2, y: -3 },
    { x: -2, y: -2 },
    { x: -2, y: -1 },
    { x: -2, y: 0 },
    { x: -2, y: 1 },
    { x: -2, y: 2 },
    { x: -1, y: -3 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },

    { x: 0, y: -3 },
    { x: 0, y: -2 },
    { x: 0, y: -1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },

    { x: 1, y: -3 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
    { x: 2, y: -3 },
    { x: 2, y: -2 },
    { x: 2, y: -1 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 5, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 2 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
    { x: 4, y: 5 },

  ];
  move() {
    this._y = this._y + Math.random() - 0.5;
  };

  draw() {
    this._canvas.setColor("yellow");
    super.draw();
  };
}