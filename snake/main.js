import { createCell, initGamefield, setCellClass, getCellClass } from './gamefield.js';
import * as configuration from './config.js';

const START_X = 10;
const START_Y = 10;

let maxLength = 5;
let stepLengthMs = 200;
let direction = 'right';

const snake = [
  { x: START_X, y: START_Y }
];

function init() {
  initGamefield();

  nextStep();
}

function nextStep() {
  setTimeout(nextStep, stepLengthMs);

  setCellClass(snake[0].x, snake[0].y, 'snake');

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === 'right') {
    headX = headX + 1;
  }

  snake.unshift({ x: headX, y: headY });

  if (snake.length > maxLength) {
    const tail = snake.pop();
    setCellClass(tail.x, tail.y, '');
  }
}

function handleKeyDown(e) {

  // switch (e.code) {
  //   case 'ArrowUp':
  //     direction = 'up';
  //     break;
  //   case 'ArrowDown':
  //     direction = 'down';
  //     break;
  //   case 'ArrowLeft':
  //     direction = 'left';
  //     break;
  //   case 'ArrowRight':
  //     direction = 'right';
  //     break;
  // }

  const keyDirectionMap = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  }

  direction = keyDirectionMap[e.code] || direction;
}

window.addEventListener('load', init);

window.addEventListener('keydown', handleKeyDown);

