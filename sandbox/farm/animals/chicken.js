import { Animal } from './animal.js';

export class Chicken extends Animal {

  phase = Math.random() * 2000;
  pixels = [
    { x: -2, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];

  move() {
    this._x = this._x + Math.sin(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
    this._y = this._y + Math.cos(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
  }
}