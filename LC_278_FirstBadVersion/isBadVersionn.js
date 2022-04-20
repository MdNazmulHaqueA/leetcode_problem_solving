var solution = function(isBadVersion) {
   return function(n) { 
       let left = 1; 
       let right = n;
       if(n== 1) return n;
       let firstBadVersion = n;
       while(left < right){
           
           let mid = left + Math.floor((right-left)/2);
           
           if(isBadVersion(mid)){
               right = mid;
               firstBadVersion = mid;
           }else{
               left = mid+1;
           }
       }
       
       return firstBadVersion;
   };
};


