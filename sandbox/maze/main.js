import { Gamefield } from '../libs/gamefield.js';
import { setCellClass } from '../snake/gamefield.js';

/** @type Gamefield */
let gamefield;

const directions = {
  north: { x: 0, y: -1 },
  south: { x: 0, y: 1 },
  west: { x: -1, y: 0 },
  east: { x: 1, y: 0 },
}

function main() {
  gamefield = new Gamefield(document.getElementById('gamefield'));
  gamefield.init({ width: 51, height: 31 });

  setupWalls(gamefield);
  const startX = Math.floor(Math.random() * ((gamefield.width - 1) / 2)) * 2 + 1;
  const startY = Math.floor(Math.random() * ((gamefield.height - 1) / 2)) * 2 + 1;
  dissolve(startX, startY);
}

function dissolve(initX, initY) {
  /** @type string[] */
  const borderWalls = [];
  /** @type string[] */
  const checkedSpace = [];

  function findWalls(currX, currY) {
    const cellId = `x${currX}y${currY}`
    if (checkedSpace.includes(cellId)) return;

    switch (gamefield.getCellClass(currX, currY)) {
      case 'permawall':
        return;
      case 'wall':
        if (borderWalls.includes(cellId)) {
          borderWalls.splice(borderWalls.indexOf(cellId), 1);
        } else {
          borderWalls.push(cellId);
        }
        return;
      default:
        checkedSpace.push(cellId);
        Object.values(directions).forEach(({ x, y }) => {
          findWalls(currX + x, currY + y);
        });
    }
  }

  findWalls(initX, initY);

  while (borderWalls.length) {
    const removeWallIndex = Math.floor(Math.random() * borderWalls.length);
    const [removeWallCellId] = borderWalls.splice(removeWallIndex, 1);
    const [cellX, cellY] = removeWallCellId.substring(1).split('y');
    const cell = gamefield.setCellClass(cellX, cellY, '');
    findWalls(Number(cellX), Number(cellY));
  }
}

function setupWalls(gf) {
  for (let y = 0; y < gf.height; y++) {
    for (let x = 0; x < gf.width; x++) {
      gf.setCellClass(x, y, 'wall');
    }
  }
  for (let y = 1; y < gf.height; y = y + 2) {
    for (let x = 1; x < gf.width; x = x + 2) {
      gf.setCellClass(x, y, '');
      gf.setCellClass(x + 1, y + 1, 'permawall');
    }
  }
  for (let y = 0; y < gf.height; y = y + 1) {
    gf.setCellClass(0, y, 'permawall');
    gf.setCellClass(gf.width - 1, y, 'permawall');
  }
  for (let x = 0; x < gf.width; x = x + 1) {
    gf.setCellClass(x, 0, 'permawall');
    gf.setCellClass(x, gf.height - 1, 'permawall');
  }
}

window.addEventListener('load', main);