// Почините функции

function factorial(factorialBase) {
  let result = 1;
  for (let i = 1; i <= factorialBase; i++) {
    result = result * i;
  }
}

console.log(factorial(5));


function countLetters(message, letter) {
  let result = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] = letter) {
      result = result + 1;
    }
  }
  return result;
}

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(countLetters(message, 'i'));