//Extract all the values of an array that are divisible by n
// For example;
// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [4, 6]

function isDivisbleByN(arr, num) {
   let result = []; let slim;

   function unique(val) {
      let answer = [];
      val.sort((i,j) => i - j);
      for (let i = 0; i <= val.length; i++) {
         if (val[i] === val[i + 1]) {
            continue
         } else {
            answer.push(arr[i])
         }
      }
      return answer
   }

   slim = unique(arr);

   for (let i = 0; i < slim.length; i++) {
      if (slim[i] % num == 0) {
         result.push(slim[i]);
      }
   }
   console.log(result);
}

isDivisbleByN([1,3,5,6,3,6,7,4], 2)