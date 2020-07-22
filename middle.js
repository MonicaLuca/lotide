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

const middle = function(arr) {
  let newArr = [];
  if (arr.length < 3) {
    return newArr;
  } else {
    if (arr.length % 2 === 0) {
      let i = arr.length / 2;
      newArr.push(arr[i - 1], arr[i]);
      return newArr;
    } else {
      let i = Math.floor(arr.length / 2);
      newArr.push(arr[i]);
      return newArr;
    }
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
