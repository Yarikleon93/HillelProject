import { Maze } from './maze.js';

function main() {
  const maze = new Maze(document.getElementById('gamefield'));
  maze.init({ width: 41, height: 31, cellSize: 15 });
}

window.addEventListener('load', main);
