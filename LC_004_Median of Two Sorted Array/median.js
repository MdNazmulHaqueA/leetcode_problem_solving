// const array3 = [...new Set([...array1,...array2])]; // array merged and sorted

var findMedianSortedArrays = function(nums1, nums2) {
   
   //  step 1: Concat 2 array
   //  step 2 : calculate median
   let mergedArray = [...nums1,...nums2];
   return getMedian(mergedArray);
};


function getMedian(array) {
   array.sort(function(a, b){return a-b}); //sort in an ascending order 
   var median;
   
   if (array.length % 2 !== 0) {
     median = array[Math.floor(array.length / 2)];
   }
   else {
     var mid1 = array[(array.length / 2) - 1];
     var mid2 = array[array.length / 2];
     median = (mid1 + mid2) / 2;
   }
   
   return median;
 }

 
 console.log(findMedianSortedArrays([1,3],[2]));
 console.log(findMedianSortedArrays([1,2],[3,4]));