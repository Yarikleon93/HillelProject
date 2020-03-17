import { Animal } from './animal.js';

export class Horse extends Animal {
  phase = Math.random();
  pixels = [
    { x: -3, y: -2 },
    { x: -3, y: -1 },
    { x: -2, y: -2 },
    { x: -2, y: -1 },
    { x: -1, y: -3 },
    { x: -1, y: -2 },
    { x: -4, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
    { x: -1, y: 3 },
    { x: 0, y: -1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: -1 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: 3, y: -1 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: -1 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: -1 },
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 6, y: -1 },
    { x: 6, y: -1 },
    { x: 6, y: -2 },
    { x: 7, y: -2 },
    { x: 8, y: -2 }
  ];
  move() {
    this._x =
      this._x + Math.sin((Math.PI * ((Date.now() + this.phase) % 2000)) / 1000);
    this._y =
      this._y + Math.cos((Math.PI * ((Date.now() + this.phase) % 2000)) / 1000);
  }
}
