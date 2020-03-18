import { Animal } from './animal.js';

export class Lama extends Animal {
    phase = Math.random() * 10;
    pixels = [
      { x: -2 , y: -3 },
      { x: -1 , y: -3 },
      { x: -1 , y: -2 },
      { x: -1 , y: -1 },
      { x: -1 , y: 0 },
      { x: -1 , y: 1 },
      { x: -1 , y: 2 },
      { x: -1 , y: 3 },
      { x: -1 , y: 4 },
      { x: 0 , y: 0 },
      { x: 0 , y: 1 },
      { x: 1 , y: 0 },
      { x: 1 , y: 1 },
      { x: 2 , y: 0 },
      { x: 2 , y: 1 },
      { x: 3 , y: 0 },
      { x: 3 , y: 1 },
      { x: 3 , y: 2 },
      { x: 3 , y: 3 },
      { x: 3 , y: 4 },
    ];

    move() {
      this._x = this._x + Math.cos(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
      this._y = this._y + Math.sin(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
    }
}