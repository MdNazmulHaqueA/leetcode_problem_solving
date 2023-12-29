const isHappy = num => {
  if (num < 1) return false;
  let set = new Set();
  while (!set.has(getDigitSquareSum(num))) {
    set.add(getDigitSquareSum(num));
    num = getDigitSquareSum(num);
    //  console.log(num);
    if (num === 1) {
      return true;
    }
  }
  return false;
};

const getDigitSquareSum = num => {
  let digit = 0;
  let digitSquare = 0;
  while (num > 0) {
    digit = num % 10;
    digitSquare += digit * digit;
    num = Math.floor(num / 10);
  }
  return digitSquare;
};

console.log(isHappy(19));
console.log(isHappy(2));
