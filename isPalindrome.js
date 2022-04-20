function isPalindrome(str){
   str = str.toLowerCase();
   let charArr = str.split("");
   let validChars = "abcdefghijklmnopqrstuvwxyz".split("")
   let lettersArr = [];
   charArr.forEach(char =>{
      if(validChars.indexOf(char) != -1){
         lettersArr.push(char);
      }
      // if(validChars.indexOf(char) > -1){
      //    lettersArr.push(char);
      // }
   })

   if(lettersArr.join("") === lettersArr.reverse().join("")){
      return true;
   }else{
      return false;
   }
}

console.log(isPalindrome("race car"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("Madam I'm Adam"));