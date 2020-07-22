const eqArrays = function(actual, expected) {
  let counter = 0;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        counter++;
      }
    }   
    if (counter === actual.length) {
      return true;  
    } else {
      return false;
    } 
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};



const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    newArr.push(source[i]);
  } for (let j = 0; j < newArr.length; j++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (newArr[j] === itemsToRemove[k]) {
        newArr.splice(j, 1);
      }
    }
  } 
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]