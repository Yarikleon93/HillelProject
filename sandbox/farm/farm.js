import { CanvasLib } from '../libs/canvas-lib.js';
import { Animal, Cow, Chicken } from './animals/index.js';

/** @type ICanvasLib */
let canvas;

/** @type Animal[] */
let animals = [];

function main() {
  canvas = new CanvasLib('canvas');
  const ZOOM = 5;
  canvas.init(ZOOM);

  setTimeout(nextFrame, 50);

  for (let i = 0; i < 20; i++) {
    animals.push(new Chicken(Math.random() * canvas.width, Math.random() * canvas.height, canvas));
  }
  for (let i = 0; i < 5; i++) {
    animals.push(new Cow(Math.random() * canvas.width, Math.random() * canvas.height, canvas));
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
