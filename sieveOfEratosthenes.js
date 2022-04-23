function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
    // [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    // [true,true,true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
  }

  primes[0] = false;
  primes[1] = false;
  // [false,false,true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
  // optimization: stop looping through at the square root of n.
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }

  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}

console.log(sieveOfEratosthenes(20));
