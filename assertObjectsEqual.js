const eqObjects = function (object1, object2) {
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);

  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (let key of keyObj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      return true;
    }
    return false;
  }
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util".inspect);
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) === true
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
