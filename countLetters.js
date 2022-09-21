const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const obj = {};
  const newStr = string.replace(/\s/g, "").toLowerCase();

  for (let i of newStr) {
    if (!obj[i]) {
      obj[i] = 0;
    }
    obj[i]++;
  }
  return obj;
};
