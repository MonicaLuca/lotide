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

const eqObjects = function(object1, object2) {
  const arrOne = Object.keys(object1);
  const arrTwo = Object.keys(object2);
  if (arrOne.length !== arrTwo.length) {
    //console.log(arrOne.length !== arrTwo.length)
    return false;
  } else {
    for (let i in object1) {
      if (Array.isArray(object1[i])) {
        if (!eqArrays(object1[i], object2[i])) {
        //console.log(object1[i], object2[i])
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          // console.log(object1[i], object2[i]);
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // print true

module.exports = assertObjectsEqual;