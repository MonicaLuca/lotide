
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  let counter = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        counter++;
      }
    }
    if (counter === array1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const findKeyByValue = function(object, value) {
  const arrOne = Object.keys(object);
  const arrTwo = Object.values(object);
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] === value) {
      return arrOne[i];
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



module.exports = findKeyByValue;