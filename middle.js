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

module.exports = middle;