
function fizzBuzz(n){
   let stringArr = [];
   for (let i = 1; i <=n; i++) {
      if(i%15===0){
         stringArr.push("FizzBuzz")
      }
      else if(i%3===0){
        stringArr.push("Fizz");
      }
       else if (i%5 === 0){
         stringArr.push("Buzz");
       }
       else {
         stringArr.push(i.toString());
       }
   }
   return stringArr;
}

console.log(fizzBuzz(5));



/*
const fizzBuzz = n => {
  let stringArray = [];
  for (let i = 1; i <= n; i++) {
    let val =
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i.toString();
    stringArray.push(val);
  }
  return stringArray;
};

*/

//second approach takes more memory and time.

console.log(fizzBuzz(5));
