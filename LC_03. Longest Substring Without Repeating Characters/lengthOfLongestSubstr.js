// O(n) optimal solution sliding window and hashmap
/*

The sliding window will represent the current substring of non repeating characters we are on.

We will not be working with sliding window of fixed size. the window will grow or shrink in size as we iterate thru string.

Current index and value in for loop will always be end of the sliding window. As end of window increases, we conditionally increase start of window.

*/

/*
Pseudo code:

Create an empty hashMap (key/val -> character/index)
Create start and max variable, set both with initial values of zero.

Loop thru Input String
   if current character is HashMap & has index >= start
      set start to index for character found in HashMap + 1
   Set key/value pair on Hashmap to be current character/current index
   if length of current window is greater than max
      set max to length of current window

Return max

*/

var lengthOfLongestSubstring = function (s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
};


// Time complexity : O(n) Each character of the string needs to be visited once

// Space complexity: O(min(m,n)) The number of keys in Hash Map boundary by the size of the string n and the size of the charset/alphabet m.