//recursive way
// inefficient - exponential runtime.
// complexity O(2^n)
// we cannot calculate any high number. (crash)
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(10));


// Note memoized fibonacci has linear runtime and O(n) complexity but this fibonacci algorithm is also a recursive!
// can calculate 1000+ fibonacci without crashing the browser

// function fibMemo(index, cache) {
//    cache = cache || [];
//    if (cache[index]) return cache[index];
//    else {
//      if (index < 3) return 1;
//      else {
//        cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
//      }
//    }
//    return cache[index];
//  }
  
//  fibMemo(500);
