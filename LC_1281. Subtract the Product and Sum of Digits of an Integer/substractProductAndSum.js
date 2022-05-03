// faster than 82.17 || 88.96
var subtractProductAndSum = function (n) {
  let rem = 0;
  let sum = 0;
  let product = 1;
  while (n !== 0) {
    rem = n % 10;
    sum = sum + rem;
    product = product * rem;
    n = Math.floor(n / 10);
  }
  let diff = product - sum;
  return diff;
};

console.log(subtractProductAndSum(4421));
