function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index]; //base case.
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

fibMemo(500); //first time we call this function we don't have to pass the cache into because no fibonacci number has been calculated yet. We need to define the cache inside our function.
