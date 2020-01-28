// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.


function persistence(num) {
   let numLength = num.toString().length;
   if(numLength === 1) return 0;
   let count = 0;
   for(; numLength > 1; count++) {
     let product = num.toString().split('').reduce((acc, curr) => parseInt(acc) * parseInt(curr));
     numLength = product.toString().length;
     num = product
   }
   return count;
}