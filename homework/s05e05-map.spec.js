const { copy, copyAndMultiply, map } = require('./s05e05-map');

describe('copy function', () => {
  it('should return an array', () => {
    expect(copy([])).toBeInstanceOf(Array)
  });

  it('should not return the input array', () => {
    const testArray = [1, 2, 3];
    expect(copy(testArray)).not.toBe(testArray);
  });

  it('should correclty copy items', () => {
    const testArray = [1, 2, 3];
    expect(copy(testArray)).toEqual([1, 2, 3]);
  });
});

describe('copyAndMultiply function', () => {
  it('should correctly multiply number items by two', () => {
    const testArray = [1, 2, 3];
    expect(copyAndMultiply(testArray)).toEqual([2, 4, 6]);
  });
});

describe('map function', () => {
  it('should apply provided function to each element', () => {
    expect(map([1.4, 3.7, 5.1], Math.round)).toEqual([1, 4, 5]);
  })
})
