import { Animal } from './animal.js';

export class Pig extends Animal {
  pixels = [
    { x: -2 , y: -3 },
    { x: -2 , y: -2 },
    { x: -2 , y: -1 },
    { x: 4 , y: -1 },
    { x: 5 , y: -1 },
    { x: 5 , y: -2 },
    { x: -3 , y: 0 },
    { x: -2 , y: 0 },
    { x: -1 , y: 0 },
    { x: 0 , y: 0 },
    { x: 1 , y: 0 },
    { x: 2 , y: 0 },
    { x: 3 , y: 0 },
    { x: -3 , y: -1 },
    { x: -2 , y: -1 },
    { x: -1 , y: -1 },
    { x: -0 , y: -1 },
    { x: 1 , y: -1 },
    { x: 2 , y: -1 },
    { x: 3 , y: -1 },
    { x: -4 , y: 0 },
    { x: -5 , y: 1 },
    { x: -4 , y: 1 },
    { x: -3 , y: 1 },
    { x: -2 , y: 1 },
    { x: -1 , y: 1 },
    { x: -0 , y: 1 },
    { x: 1 , y: 1 },
    { x: 2 , y: 1 },
    { x: 3 , y: 1 },
    { x: -2 , y: 2 },
    { x: -2 , y: 3 },
    { x: 3 , y: 2 },
    { x: 3 , y: 3 },
  ];
  
  move = function() {
    this._x = this._x + (Math.random() - 0.5) * 3;
    this._y = this._y + (Math.random() - 0.5) * 3;
  }
}