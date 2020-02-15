import { createCell, initGamefield } from './gamefield.js';
import * as configuration from './config.js';

let stepLengthMs = 500;

function init() {
  initGamefield();

  nextStep();
}

function nextStep() {
  setTimeout(nextStep, stepLengthMs);
  console.log('Step');
}

window.addEventListener('load', init);

