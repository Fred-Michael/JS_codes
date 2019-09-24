//Find all the numbers in a string and sum them up

function sumNumbers (str) {
   // your code goes here...
   var result = []; let num_check = ""; let sum = 0;
   for (let i=0; i <= str.length; i++) {
      //check to see if the current "stringed number" is a Number.
      //If it is, run the 'if' condition. if it's not, run the 'else' condition
      if (!isNaN(str[i])) {
         num_check += str[i]
      } else {
         result.push(num_check)
         num_check = ""
      }
   }
   //the loop below runs through the "result" array and adds each numbered-version element
   //to the "sum" variable. 
   for (let j = 0; j < result.length; j++) {
      //code goes here
      if (!isNaN(result[j])) {
         sum += Number(result[j])
      } else {
         continue
      }
   }
   console.log(sum)
}
 
sumNumbers("1weudh56jdnbfskjn788sdhkfbs90")