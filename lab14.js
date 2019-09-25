//You are given a string of numbers and characters separated by commas (,).
//For example: ‘2,g,65,e,3,7,5,g,3’
//Find the total sum of the numbers in the given string
//For example:
//sumNumbers(‘2,g,65,e,3,7,5,g,3’) => 85

function sumNumbers (str) {
   // your code goes here...
   var result = []; let answer; let word = str.split(",")
   for (let i=0; i < word.length; i++) {
      if (Number(word[i])) {
         result.push(Number(word[i]));
      } else {
         continue
      }
   }
   answer = result.reduce((a,b) => a + b, 0)
   console.log(answer)
   // console.log(result)
}
 
sumNumbers("2,g,65,e,3,7,5,g,3")