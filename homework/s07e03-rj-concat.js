// Напишите функцию concat (сокращение от concatenate), которая склеит
// несколько массивов в один.

const concat = function(inputArrays) {
  const results = [];
  inputArrays.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // добавьте все элементы из каждого subArray в массив с результатами
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

// ожидаемый результат "[1,2,3,4,5,6,7,8,9]"
console.log(concat([ [1,2,3], [4,5,6], [7,8,9] ]));
