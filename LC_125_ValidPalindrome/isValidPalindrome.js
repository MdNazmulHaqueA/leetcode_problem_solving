const isPalindrome = (s) => {
  //Change string to lowercase and and use regex to remove non-alphanumeric 
  const sTrim = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return (sTrim === sTrim.split('').reverse().join('')); 
};

// function isPalindrome(s) {
//   //sanitize the input string
//   s = s.toLowerCase().replace(/[\W_]/g,"");
//   let left = 0;
//   let right = s.length-1;

//   while(left<right){
//       if(s[left] !== s[right]){
//           return false;
//       }
//       left++;
//       right--;
//   }
//   return true

// }

console.log(isPalindrome("race car"));
console.log(isPalindrome("0p"));
console.log(isPalindrome("Madam I'm Adam"));
