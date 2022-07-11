function fibonacciNumber(position){
   if(position<3) return 1;
   else return fibonacciNumber(position-1)+fibonacciNumber(position-2);
}

console.log(fibonacciNumber(5));
console.log(fibonacciNumber(10));
console.log(fibonacciNumber(35));