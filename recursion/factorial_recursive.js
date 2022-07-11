function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// function factorial(x) {
//   if (x < 0) return 0;
//   if (x <= 1) return 1;
//   return x * factorial(x - 1);
// }

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));