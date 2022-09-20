const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) === true
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//create a function with 2 parameters
//return a new array with items only from source and not from itemsToRemove

const without = function (source, itemsToRemove) {
  let i = 0;
  while (i < source.length) {
    for (let j of itemsToRemove) {
      if (source[i] === j) {
        source.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  return source;
};

console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3], [1, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);
assertArraysEqual([], []);
