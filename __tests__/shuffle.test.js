const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // Test whether shuffle returns an array
  test("return an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });

  // Test whether shuffle returns an array of the same length as the input array
  test("return an array of the same length as the input array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  // Test whether all the same items are in the array
  test("contain all the same items as the input array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    inputArray.forEach((item) => {
      expect(shuffledArray).toContain(item);
    });
  });

  // Test whether the items have been shuffled around
  test("shuffle the items in the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray).not.toEqual(inputArray);
  });
});
