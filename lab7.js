//Return all the unique values in an array as another array.

function unique(arr) {
   //code goes here
   let result = [];
   //sort the array in ascending order first
   arr.sort((i,j) => i - j);
   //loop through each array to compare
   for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
         continue
      } else {
         result.push(arr[i])
      }
   }
   console.log(result)
}

unique([8,8,9,6,4,4,3,4,1,2,2,9,0,6,4])