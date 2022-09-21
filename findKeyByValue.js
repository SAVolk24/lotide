const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  let result = undefined;
  let keys = Object.keys(obj);

  for (let i of keys) {
    if (obj[i] === value) {
      result = i;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  oldSchool: "That '70s Show",
  gameShow: "Price is Right",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "oldSchool");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Price is Right"), "gameShow");
