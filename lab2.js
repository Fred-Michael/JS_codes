//Find the length of the numbers in array A that are divisible by 2 or 3 and greater than 15

function divisible(A) {
   //code goes here
   let result = [];
   for(let i = 0; i < A.length; i++) {
      if (A[i] > 15) {
         if (A[i] % 2 == 0 || A[i] % 3 ==0) {
            result.push(A[i]);
         }
      }
   }
   console.log(result.length);
}

divisible([5,8,6,12])