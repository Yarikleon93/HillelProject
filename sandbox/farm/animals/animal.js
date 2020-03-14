export class Animal {
  pixels = [];

  /**
   * @param {number} x
   * @param {number} y
   * @param {ICanvasLib} canvas
   */
  constructor(x, y, canvas) {
    this._x = x;
    this._y = y;
    this._canvas = canvas;
  }

  move() {}

  draw() {
    this.pixels.forEach(({ x, y }) => this._canvas.setPixel(this._x + x, this._y + y));
  }
}