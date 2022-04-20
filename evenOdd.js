function isEvenOrOdd(n) {
//   if (n % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// return (n%2 == 0 ? 'even' : 'odd');
return ( Math.floor(n/2)*2==n ) ? "even": "odd";
// return (n & 1? 'odd' : 'even');

}




console.log(isEvenOrOdd(7));