import { Animal } from './animal.js';

export class Cow extends Animal {
  pixels = [
    { x: -3 , y: -2 },
    { x: -3 , y: -1 },
    { x: -2 , y: -2 },
    { x: -2 , y: -1 },
    { x: -1 , y: -3 },
    { x: -1 , y: -2 },
    { x: -1 , y: -1 },
    { x: -1 , y: 0 },
    { x: -1 , y: 1 },
    { x: -1 , y: 2 },
    { x: -1 , y: 3 },
    { x: 0 , y: -1 },
    { x: 0 , y: 0 },
    { x: 0 , y: 1 },
    { x: 1 , y: -1 },
    { x: 1 , y: 0 },
    { x: 1 , y: 1 },
    { x: 2 , y: -1 },
    { x: 2 , y: 0 },
    { x: 2 , y: 1 },
    { x: 3 , y: -1 },
    { x: 3 , y: 0 },
    { x: 3 , y: 1 },
    { x: 3 , y: 2 },
    { x: 3 , y: 3 },
  ];

  move() {
    this._x = this._x + Math.random() - 0.5;
  }

}