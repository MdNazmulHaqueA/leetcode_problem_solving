//Not workable for negative numbers
// function isPalindrome(num) {
//   let original = num;
//   let reversed = 0;
//   while (num != 0) {
//     reminder = num % 10;
//     reversed = reversed * 10 + reminder;
//     num = parseInt(num/10);
//   }
//   if (original === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

var isPalindrome = function (x) {
  let num = x.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] === num[num.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(147));
console.log(isPalindrome(16461));
console.log(isPalindrome(-121));
