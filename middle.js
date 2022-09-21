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

const middle = function (arr) {
  if (arr.length < 3) {
    arr = [];
  } else if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  } else if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  }
  return arr;
};
