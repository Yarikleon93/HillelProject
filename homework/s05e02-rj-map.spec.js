// To make projections easier, let's add a map() function.
// Map accepts the array and a projection function to be applied to each item in the source array,
// then returns the projected array.

const map = function(inputArray, projectionFunction) {
  const results = [];
  inputArray.forEach(function(itemInArray) {

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};


// Unit tests
describe("map function", () => {
  it("should correctly increment items in the [1, 2, 3] array", () => {
    const inputArray = [1, 2, 3];
    const mapperFunction = function(x) {
      return x + 1;
    };
    const result = map(inputArray, mapperFunction);

    expect(result).toEqual([2, 3, 4]);
  });
});


