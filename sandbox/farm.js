import { CanvasLib } from './libs/canvas-lib.js';

/** @type CanvasLib */
let canvas;

function Animal() {
  this._x = 0;
  this._y = 0;
  this.pixels = [];

  // Abstract
  this.move = function() {}

  this.draw = function() {
    this.pixels.forEach(({ x, y }) => canvas.setPixel(this._x + x, this._y + y));
  }
}

const animal = new Animal();

function Chicken(x, y) {
  this._x = x;
  this._y = y;
  this.phase = Math.random() * 2000;
  this.pixels = [
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

  this.move = function() {
    this._x = this._x + Math.sin(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
    this._y = this._y + Math.cos(Math.PI * ((Date.now() + this.phase) % 2000) / 1000);
  }
}

Chicken.prototype = animal;

function Cow(x, y) {
  this._x = x;
  this._y = y;
  this.pixels = [
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
  this.move = function() {
    this._x = this._x + Math.random() - 0.5;
  }
}

Cow.prototype = animal;


/** @type Animal[] */
let animals = [];

function main() {
  canvas = new CanvasLib('canvas');
  const ZOOM = 5;
  canvas.init(ZOOM);

  setTimeout(nextFrame, 50);

  for (let i = 0; i < 20; i++) {
    animals.push(new Chicken(Math.random() * canvas.width, Math.random() * canvas.height));
  }
  for (let i = 0; i < 5; i++) {
    animals.push(new Cow(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function nextFrame(timestamp) {
  setTimeout(nextFrame, 50);

  canvas.clear('green');

  canvas.setColor('white');
  animals.forEach(animal => animal.move());
  animals.forEach(animal => animal.draw());

}


window.addEventListener('load', main);
