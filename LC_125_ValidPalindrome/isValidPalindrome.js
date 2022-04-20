const isPalindrome = (s) => {
  //Change string to lowercase and and use regex to remove non-alphanumeric 
  const sTrim = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return (sTrim === sTrim.split('').reverse().join('')); 
};

console.log(isPalindrome("race car"));
console.log(isPalindrome("0p"));
console.log(isPalindrome("Madam I'm Adam"));
