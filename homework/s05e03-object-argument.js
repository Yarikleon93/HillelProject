/**
 * @param {string[]} lines - array of strings
 */
function addLine(lines) {
  page.push('Line ' + lines.length);
}

const mainPageLines = ['Line 1', 'Line 2', 'Line 3'];

addLine(mainPageLines);
addLine(mainPageLines);

// Сколько элементов выведется в консоль? Объясните ваш ответ.
console.log(mainPageLines);




