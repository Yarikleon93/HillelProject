/**
 * Freezes js execution for a given amount of milliseconds
 * @param {number} ms
 */
function sleep(ms) {
  const start = Date.now();
  // eslint-disable-next-line no-empty
  while (Date.now() - ms < start) {
  }
}

function sleepButtonClick() {
  console.log('Before sleep');
  sleep(10000);
  console.log('After sleep');
}

function throwButtonClick() {
  document.body.style.background = 'red';
  throw new Error('A handmade error');
  // document.body.style.background = 'initial';
}