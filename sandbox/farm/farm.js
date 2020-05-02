import { CanvasLib } from '../libs/canvas-lib.js';
import {
  Cow,
  Chicken,
  Horse,
  TallHorse,
  Croco,
  Rabbit,
  Pig,
  Deer,
  Dog,
  ZooKeeper,
  Lama
} from './animals/index.js';

/** @type ICanvasLib */
let canvas;

/** @type Animal[] */
let animals = [];

function main() {
  canvas = new CanvasLib('canvas');
  const ZOOM = 5;
  canvas.init(ZOOM);

  setTimeout(nextFrame, 50);

  const farmConfig = [
    { animal: Chicken, count: 20 },
    { animal: Cow, count: 5 },
    { animal: Deer, count: 3 },
    { animal: Pig, count: 10 },
    { animal: Rabbit, count: 7 },
    { animal: Croco, count: 5 },
    { animal: Horse, count: 3 },
    { animal: TallHorse, count: 5 },
    { animal: Dog, count: 8 },
    { animal: ZooKeeper, count: 3 },
    { animal: Lama, count: 9 },
  ];

  farmConfig.forEach(animalConfig => {
    for (let i = 0; i < animalConfig.count; i++) {
      animals.push(animalConfig.animal.createOn(canvas));
    }
  });
  

  let farm = document.querySelector('.farm');
  function dellAnimal(e) {
    const mouseClickX =  Math.floor((e.pageX - farm.offsetLeft)/ZOOM);
    const mouseClickY =  Math.floor((e.pageY - farm.offsetTop)/ZOOM);
    animals.forEach((animal,index) => {
      let isAnimal = animal.pixels.find((animalPixel) =>
        Math.round(animal._x) + animalPixel.x === mouseClickX && Math.round(animal._y) + animalPixel.y === mouseClickY);
      if(isAnimal) {
        animals.splice(index,1);
      }
    });   
  }
  farm.addEventListener('click', dellAnimal);

}

function nextFrame() {
  setTimeout(nextFrame, 50);

  canvas.clear('green');

  animals.forEach(animal => animal.move());
  animals.forEach(animal => animal.draw());

}




window.addEventListener('load', main);