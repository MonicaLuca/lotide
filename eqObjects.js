
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);