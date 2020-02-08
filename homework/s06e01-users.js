const { users } = require('./s06e01-users-data');

/**
 * @param {any[]} array
 * @param {function} qualifierFn
 * @returns {any[]}
 */
function filter(array, qualifierFn) {
  let newArray = [];
  array.forEach(function(item) {
    if (qualifierFn(item)) {
      newArray.push(item);
    }
  });

  return newArray;
}

const activeOnly = function(user) {
  return user.isActive;
};

const maleOnly = function(user) {
  return user.gender === "male";
};

const activeUsers = filter(users, function(user) {
  return user.age < 30;
});

const firstActive = users.find(user => user.isActive);
const allActive = users.every(activeOnly);
const atLeastOneIsActive = users.some(activeOnly);
