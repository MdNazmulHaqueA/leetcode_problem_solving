const twoSum = function (num, target) {
  for (i = 0; i < num.length; i++) {
    for (j = (num.length - 1); j >= i+1; j--) {
      if (num[i] + num[j] === target) {
         return [i,j]
      }
    }
  }
};



// twoSum([2, 7, 11, 15], 9);
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([3, 2, 3], 6));
