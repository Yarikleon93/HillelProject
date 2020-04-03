import { Gamefield } from '../libs/gamefield.js';

/**
 * Create a new maze by providing a base DOM element to constructor
 *
 * Use "init" method to initialize the maze with desired options.
 *
 * The Maze class extends DOM EventTarget.
 * When the maze is complete, the maze instance emits a "ready" event.
 * You can listen to "ready" event as to usual DOM event.
 */

export class Maze extends EventTarget {
  /** @type string[] */
  crackedWalls = [];

  width = 11;
  height = 11;
  cellSize = 15;
  async = true;
  asyncDelay = 10;

  static directions = [
    { name: 'north', x: 0, y: -1 },
    { name: 'south', x: 0, y: 1 },
    { name: 'west', x: -1, y: 0 },
    { name: 'east', x: 1, y: 0 },
  ];

  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super();
    this.gamefield = new Gamefield(element);
  }

  /**
   * @param {object} options
   * @param {number} options.width
   * @param {number} options.height
   * @param {number} [options.cellSize]
   * @param {boolean} [options.async]
   * @param {number} [options.asyncDelay]
   */
  init(options) {
    // this is not the safest solution, however it's the shortest one
    // assign only known properties to this
    Object.assign(this, options);

    this.gamefield.init({
      width: this.width,
      height: this.height,
      cellSize: this.cellSize,
    });

    this._setupWalls();
    const startX = Math.floor(Math.random() * (Math.floor(this.width / 2))) * 2 + 1;
    const startY = Math.floor(Math.random() * (Math.floor(this.height / 2))) * 2 + 1;

    this._exploreCell(startX, startY);
    this._dissolveRandomWall();
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {string}
   */
  getCell(x, y) {
    return this.gamefield.getCellClass(x, y);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {string} cellClass
   */
  setCell(x, y, cellClass) {
    return this.gamefield.setCellClass(x, y, cellClass);
  }

  _setupWalls() {
    for (let y = 1; y < this.height; y = y + 2) {
      for (let x = 1; x < this.width; x = x + 2) {
        this.setCell(x, y, 'untouched');
        this.setCell(x + 1, y, 'wall');
        this.setCell(x, y + 1, 'wall');
        this.setCell(x + 1, y + 1, 'permawall');
      }
    }

    for (let y = 0; y < this.height; y = y + 1) {
      this.setCell(0, y, 'permawall');
      this.setCell(this.width - 1, y, 'permawall');
    }
    for (let x = 0; x < this.width; x = x + 1) {
      this.setCell(x, 0, 'permawall');
      this.setCell(x, this.height - 1, 'permawall');
    }
  }

  _exploreCell(cellX, cellY) {
    const cellId = `x${cellX}y${cellY}`;
    switch (this.getCell(cellX, cellY)) {
    // A common wall found. We'll put some cracks on it and track its location.
    case 'wall':
      this.crackedWalls.push(cellId);
      this.setCell(cellX, cellY, 'crackedwall');
      return;
      // a wall found second time from other side, so it should not be removed.
      // Remove its location from crackedWalls array.
    case 'crackedwall':
      this.crackedWalls.splice(this.crackedWalls.indexOf(cellId), 1);
      this.setCell(cellX, cellY, 'permawall');
      return;
      // an empty space. Need to check out its suroundings.
      // Remove all classes to prevent any further action for this cell
    case 'untouched':
      this.setCell(cellX, cellY, '');
      Maze.directions.forEach(({ x, y }) => this._exploreCell(cellX + x, cellY + y));
      return;
    default:
    }
  }

  _dissolveRandomWall() {
    if (this.crackedWalls.length) {
      // pick a random wall from the array. Remove it from array.
      const [removeWallCellId] = this.crackedWalls.splice(Math.floor(Math.random() * this.crackedWalls.length), 1);
      const [x, y] = removeWallCellId.substring(1).split('y');
      // mark as empty unprocessed space
      this.setCell(x, y, 'untouched');
      this._exploreCell(Number(x), Number(y));

      if (this.async) {
        // Schedule an attempt to dissolve one more wall
        setTimeout(() => this._dissolveRandomWall(), this.asyncDelay);
      } else {
        // do it synchronously
        this._dissolveRandomWall();
      }
    } else {
      this.dispatchEvent(new CustomEvent('ready'));
    }
  }
}
