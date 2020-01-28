// Write a range function that takes three arguments, start, end and step, and returns an array containing all the
// numbers from start up to (and including) end with the step indicated. Next, write a sum function that takes an
// array of numbers and returns the sum of these numbers. If no step is given, the elements go up by increments
// of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step=1) {
   let result = [];
   if (start > end) {
      for (let i = start; i >= end; i += step) {
         result.push(i);
      }
      return(result);
   }
   if (start < end) {
      for (let i = start; i <= end; i += step) {
         result.push(i);
      }
      return(result);
   }
}

function sum(arrOfnums){
   let result = arrOfnums.reduce((a,b) => a + b, 0);
   console.log(result);
}

sum(range(15,1,-7)) //24
sum(range(1,10)) //55