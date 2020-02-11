
const CELL_SIZE = 20;

function init() {
  const gameField = document.getElementById('gamefield');

  gameField.style.width = `${CELL_SIZE * 20}px`;
  gameField.style.height = `${CELL_SIZE * 20}px`;

  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 20; y++) {
      // add element
      const cell = document.createElement('div');
      cell.id = `x${x}y${y}`;

      cell.style.position = 'absolute';
      cell.style.left = `${x * CELL_SIZE}px`;
      cell.style.top = `${y * CELL_SIZE}px`;
      cell.style.width = `${CELL_SIZE}px`;
      cell.style.height = `${CELL_SIZE}px`;

      const red = x * 10;
      const green = y * 10;
      const blue = 0;
      const color = `rgb(${red}, ${green}, ${blue})`;
      cell.style.backgroundColor = color;

      gameField.appendChild(cell);
    }
  }
}

window.addEventListener('load', init);

