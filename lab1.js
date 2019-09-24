//Find the elements in an array that are equal to a given variable 'xter'

function elementsEqualToX(arr, xter) {
   //code goes here
   let result = [];
   for(let i = 0; i < arr.length; i++) {
      if (arr[i] === xter) {
         result.push(xter);
      }
   }
   console.log(result);
}

elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a')