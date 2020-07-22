
const assertEqualObject = function(actual, expected) {
  for(let letter in expected){
    if (!actual[letter] || !eqArrays(actual[letter], expected[letter])) {
      console.log(`🛑🛑🛑 Assertion Failed: not the same`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: wonderful`);
};
  /*
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};
*/


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

const assertArraysEqual = function (actual, expected) {
  if(eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let sentence = 'hello world'

const letterPositions = function(string) {
  const results = {};
  const letters = string.split(' ').join('');

  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};


console.log(letterPositions(sentence));

assertEqualObject(letterPositions(sentence), { h: [ 0 ],
  e: [ 1 ],
  l: [ 2, 3, 8 ],
  o: [ 4, 6 ],
  w: [ 5 ],
  r: [ 7 ],
  d: [ 9 ] });