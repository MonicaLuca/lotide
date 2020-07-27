
const tail = function(words) {
  let newArr = words;
  newArr.splice(0,1);
  return newArr;
};

module.exports = tail;

