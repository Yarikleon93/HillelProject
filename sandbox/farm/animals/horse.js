import { Animal } from './animal.js';

export class TallHorse extends Animal {
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

export class Horse extends Animal{
    phase = Math.random() * 2000;
    _dir = -1;
    canvasWidth = this.canvasWidth;
    pixels = [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -2, y: 0},
        {x: -3, y: 0},
        {x: -4, y: 0},
        {x: 1, y: 0},
        {x: 3, y: 0},
        {x: 2, y: -1},
        {x: -2, y: -1},
        {x: -3, y: -1},
        {x: -4, y: -1},
        {x: -3, y: -2},
        {x: 0, y: 1},
        {x: -1, y: 1},
        {x: -2, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: -2, y: 2}
    ];
    move = function() {
      this._x += Math.random()  * this._dir;
      this._y = this._y + Math.cos(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
    if((this._x > this.canvasWidth && this._dir == 1) || (this._x < 0 && this._dir == -1)){
        this._dir = -this._dir;
        this.reversePixelsHorizontally();
    }
    }
    reversePixelsHorizontally = function() {
        this.pixels = this.pixels.map(point => {
            point.x = -point.x;
            return point;
        });
    }
    setColor() {
        this._canvas.setColor("#6e500b");
    }
}
