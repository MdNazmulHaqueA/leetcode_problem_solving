const arraySign = nums => {
  const product = nums.reduce(function (acc, val) {
   //  if (val === 0) return 0;
    acc = acc * val;
    return acc;
  }, 1);
  console.log(product);
  return signFunc(product);
};

const signFunc = product => {
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
