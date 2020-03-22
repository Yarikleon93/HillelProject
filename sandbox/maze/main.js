import { Gamefield } from '../libs/gamefield.js';

/** @type Gamefield */
let gamefield;

/** @type string[] */
let crackedWalls = [];

const directions = [
  { name: 'north', x: 0, y: -1 },
  { name: 'south', x: 0, y: 1 },
  { name: 'west', x: -1, y: 0 },
  { name: 'east', x: 1, y: 0 },
];

function main() {
  gamefield = new Gamefield(document.getElementById('gamefield'));
  gamefield.init({ width: 61, height: 41, cellSize: 15 });

  setupWalls(gamefield);
  const startX = Math.floor(Math.random() * (Math.floor(gamefield.width / 2))) * 2 + 1;
  const startY = Math.floor(Math.random() * (Math.floor(gamefield.height / 2))) * 2 + 1;
  createMaze(startX, startY);
}

function exploreCell(currX, currY) {
  const cellId = `x${currX}y${currY}`;
  switch (gamefield.getCellClass(currX, currY)) {
    // A common wall found. We'll put some cracks on it and track its location.
    case 'wall':
      crackedWalls.push(cellId);
      gamefield.setCellClass(currX, currY, 'crackedwall');
      return;
    // a wall found second time from other side, so it should not be removed.
    // Remove its location from crackedWalls array.
    case 'crackedwall':
      crackedWalls.splice(crackedWalls.indexOf(cellId), 1);
      gamefield.setCellClass(currX, currY, 'permawall');
      return;
    // an empty space. Need to check out its suroundings.
    // Remove all classes to prevent any further action for this cell
    case 'untouched':
      gamefield.setCellClass(currX, currY, '');
      directions.forEach(({ x, y }) => exploreCell(currX + x, currY + y));
      return;
    default:
  }
}

function dissolveRandomWall() {
  if (crackedWalls.length) {
    // pick a random wall from the array. Remove it from array.
    const [removeWallCellId] = crackedWalls.splice(Math.floor(Math.random() * crackedWalls.length), 1);
    const [x, y] = removeWallCellId.substring(1).split('y');
    // mark as empty unprocessed space
    gamefield.setCellClass(x, y, 'untouched');
    exploreCell(Number(x), Number(y));

    // Schedule an attempt to dissolve one more wall
    setTimeout(() => dissolveRandomWall(), 10);
  }
}

function createMaze(initX, initY) {
  exploreCell(initX, initY);
  dissolveRandomWall();
}

function setupWalls(gf) {
  for (let y = 1; y < gf.height; y = y + 2) {
    for (let x = 1; x < gf.width; x = x + 2) {
      gf.setCellClass(x, y, 'untouched');
      gf.setCellClass(x + 1, y, 'wall');
      gf.setCellClass(x, y + 1, 'wall');
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
