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

const countLetters = function(string) {
  const objCounter = {};
  const letters = string.split(' ').join('');
  for (let letter of letters) {
    if (objCounter[letter]) {
      objCounter[letter]++;
    } else {
      objCounter[letter] = 1;
    }
  }
  return objCounter;
};

module.exports = countLetters;



