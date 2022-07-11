function reverse(str) {
   // if (str.length === 0) return "";
   if (str.length <=1) return str;
   else {
     return reverse(str.slice(1)) + str[0];
   }
 }
 console.log(reverse("Hello"));

 
// iterative

// function reverse(str) {
//    let reverse = "";
//    for(let i=0;i<str.length; i++){
//       var char = str[i];
//       reverse = char + reverse;
//    }
//    return reverse;
// }
// console.log(reverse("hello"));


//another way

// let str = "lumzaN olleH";
// console.log(str.split("").reverse().join(""));