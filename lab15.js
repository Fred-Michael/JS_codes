//Given two arrays, return the sum of all positive non-zero results when arr2[i] is subtracted from arr1[i].
//For example:
//totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 11
//Explanation:
// 2 - 2 = 0
// 5 - 3 = 2
// 1 - 5 = -4
// 0 - 6 = -6
// 5 - 2 = 3
// 7 - 1 = 6
// Sum = 2 + 3 + 6 = 11

function totalPositiveSum(arr1, arr2) {
   let positive = []; let diff; let result;
   for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
         if(i == j) {
            diff = arr1[i] - arr2[j];
         }
      }
      if (diff > 0) {
         positive.push(diff)
      }
   }
   result = positive.reduce((a,b) => a + b, 0);
   console.log(result);
}
totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1])