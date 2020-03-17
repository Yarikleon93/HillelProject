export class Animal {
  pixels = [];
  color = 'white';

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
    this.setColor(this.color);
    this.pixels.forEach(({ x, y }) => this._canvas.setPixel(this._x + x, this._y + y));
  }
  setColor(color){
    this._canvas.setColor(color);
  }

  /**
   * @param {ICanvasLib} canvas
   */
  static createOn(canvas) {
    return new this(Math.random() * canvas.width, Math.random() * canvas.height, canvas);
  }
}