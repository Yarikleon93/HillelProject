/**
 * @param {any[]} array
 * @param {function} item
 * @returns {number}
 */
function findIndex(array, qualifier) {

}

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

// expected output: 3
console.log(findIndex(array1, isLargeNumber));

// expected output: -1
console.log(findIndex([0, 0], isLargeNumber));

// expected output: -1
console.log(findIndex([], isLargeNumber));