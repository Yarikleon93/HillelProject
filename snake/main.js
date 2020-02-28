import { createCell, initGamefield, setCellClass, getCellClass } from './gamefield.js';
import * as configuration from './config.js';

const START_X = 10;
const START_Y = 10;

let maxLength = 5;
let stepLengthMs = 200;


let direction = 'right';
let lastStepDirection = direction;

let snake;

const isVertical = dir => dir === 'up' || dir === 'down';

function startGame() {
  snake = [
    { x: START_X, y: START_Y }
  ];
  direction = 'right';
  initGamefield();
  addFood();
  nextStep();
}

function handleGameFieldClick(e) {
  const head = snake[0];
  const clickX = Number(e.target.dataset.x);
  const clickY = Number(e.target.dataset.y);
  if (isVertical(direction)) {
    if (clickX < head.x) {
      direction = 'left';
    }
    if (clickX > head.x) {
      direction = 'right';
    }
  } else {
    if (clickY < head.y) {
      direction = 'up';
    }
    if (clickY > head.y) {
      direction = 'down';
    }
  }

}


function init() {
  startGame();
  const gameField = document.getElementById('gamefield');
  gameField.addEventListener('click', handleGameFieldClick);
}



function gameOver() {
  alert(`Game over. final length: ${snake.length}`);
  startGame();
  maxLength = 5;
  stepLengthMs = 200;
}

function addFood() {

  let foodX;
  let foodY;

  do {
    foodX = Math.floor(Math.random() * configuration.FIELD_WIDTH);
    foodY = Math.floor(Math.random() * configuration.FIELD_HEIGHT);

  } while (getCellClass(foodX, foodY) !== '');

  setCellClass(foodX, foodY, 'food');

}

function nextStep() {
  const timeout = setTimeout(nextStep, stepLengthMs);

  let headX = snake[0].x;
  let headY = snake[0].y;

  switch (direction) {
    case 'right':
      headX = headX + 1;
      break
    case 'left':
      headX = headX - 1;
      break
    case 'up':
      headY = headY - 1;
      break
    case 'down':
      headY = headY + 1;
      break
  }

  lastStepDirection = direction;

  const obstacle = getCellClass(headX, headY);
  if (obstacle) {
    if (obstacle === 'food') {
      maxLength = maxLength + 1;
      stepLengthMs = stepLengthMs - 20;
      setCellClass(headX, headY, 'snake');
      addFood();
    } else {
      clearTimeout(timeout);
      gameOver();
      return;
    }
  }

  setCellClass(headX, headY, 'snake');

  snake.unshift({ x: headX, y: headY });

  if (snake.length > maxLength) {
    const tail = snake.pop();
    setCellClass(tail.x, tail.y, '');
  }
}

function handleKeyDown(e) {

  const keyDirectionMap = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  }

  const newDirection = keyDirectionMap[e.code];

  if (isVertical(lastStepDirection) !== isVertical(newDirection)) {
    direction = newDirection;
  }
}

window.addEventListener('load', init);

window.addEventListener('keydown', handleKeyDown);

