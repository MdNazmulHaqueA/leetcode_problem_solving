var sortedSquares = function (nums) {
  let unsortedArr = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    unsortedArr.push(element * element);
  }
  const sortedArr = unsortedArr.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedArr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
