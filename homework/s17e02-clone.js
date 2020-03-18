/**
 * Напишите функцию clone, которая создает и возвращает копию того, что получает на вход.
 *
 * В случае, если это примитивное значение, то просто верните его - оно и так скопируется.
 * Массивы и объекты тоже пока просто возвращвйте.
 *
 * Creates a copy of everything
 * @param {any} input
 * @returns {any}
 */
function clone(input) {

  /** YOUR CODE HERE */

}

/**
 * Это функция-помошник, которая поможет вам проверить ваш код.
 * В ней ничего менять не нужно.
 * Выводит сообщение о "тесте". Бросает ошибку, если первым параметром пришло не "truthy" значение.
 * @param {boolean} expectation - should be true
 * @param {string} message
 * @throws
 */
function assert(expectation, message) {
  console.log(message, expectation ? '- PASSED' : ' - FAILED')
  if (!expectation) {
    throw new Error(`Test FAILED - "${message}"`);
  }
}

assert('string' === clone('string'), '1. Копирует строку');
assert(10 === clone(10), '2. Копирует число');
assert(clone(true), '3. Копирует boolean');
assert(null === clone(null), '4. Копирует null');


/**
 * Добавьте в функцию clone поддержку копирования массивов.
 * Если на вход передали массив, то создайте новый массив и скопируйте в него все элементы.
 * Важно перебрать элементы "поштучно".
 * Используйте циклы for \ for..of или методы forEach, map. НЕ используйте concat и ...spread.
 *
 * Проверка на массив - Array.isArray()
 */

const arraySample = [1, 2, 3];
assert(Array.isArray(clone([])), '5. Массив копируется');
assert(arraySample !== clone(arraySample), '6. Ссылки на массивы разные');
assert(clone([1, 2, 3]).length === 3, '7. Копия массива содержит то же количество элементов');

/**
 * Доработайте функцию clone для поддержки объектов.
 * Если это объект - то необходимо вернуть мелкую копию (shallow copy) объекта.
 * Убедитесь, что случай с массивом уже обработан, так как "typeof []" тоже object.
 *
 * Создайте пустой объект, используйте один из статических методов Object для
 * получения свойств объекта в виде массива.
 * Переберите свойства с помощью цикла for..of, копируйте элементы по одному в новый объектю
 */

const obj = {
  stringProperty: 'a word',
  numberProperty: 10,
  nullProperty: null,
  array: [4, 6, 7, { deepProperty: 20}],
  nestedObject: {
    nestedProperty: 'prop',
  }
};

const shallowCopy = clone(obj);

assert(obj !== shallowCopy, '8. В переменных ссылки на разные объекты');
assert(Object.keys(shallowCopy).length === 5, '9. Копия содержит все свойства');
assert(shallowCopy.stringProperty === 'a word', '10. stringProperty скопировано');
assert(shallowCopy.numberProperty === 10, '11. numberProperty скопировано');
assert(shallowCopy.nullProperty === null, '12. nullProperty скопировано');
assert(shallowCopy.array === obj.array, '13. array скопирован, как ссылка');
assert(shallowCopy.nestedObject === obj.nestedObject, '14. nestedObject скопирован, как ссылка');


/**
 * Создайте функцию cloneDeep, которая сделает глубокую копию объекта.
 * Скопируйте код из функцию clone.
 * Усовершенствуйте функцию так, чтобы она при копировании массивов и объектов
 * каждый элемент не просто копировался как есть, а клонировался с помощью
 * этой же самой функции cloneDeep.
 * Вызов функции внутри самой себя называется рекурсией.
 *
 * Creates a deep copy of an object
 * @param {object} input
 * @returns {object}
 */
function cloneDeep(input) {

  /** YOUR CODE HERE */

}

const deepCopy = cloneDeep(obj);

assert(obj !== deepCopy, '15. В переменных ссылки на разные объекты');
assert(Object.keys(deepCopy).length === 5, '16. Копия содержит все свойства');
assert(deepCopy.stringProperty === 'a word', '17. stringProperty скопировано');
assert(deepCopy.numberProperty === 10, '18. numberProperty скопировано');
assert(deepCopy.nullProperty === null, '19. nullProperty скопировано');
assert(deepCopy.array !== obj.array, '20. array скопирован');
assert(deepCopy.nestedObject !== obj.nestedObject, '21. nestedObject скопирован');
assert(deepCopy.array[3] !== obj.array[3], '22. элемент массива склонирован');
assert(deepCopy.array[3].deepProperty === obj.array[3].deepProperty, '23. Клон элемента массива содержит свойство');
