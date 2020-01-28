// write a fxn that takes an array and returns the reversed elements of that array. Write this fxn without using the
// built in .reverse() array method. E.g. [1,2,3,4,5,6] should return [6,5,4,3,2,1].

function revarr(arr) {
   let result = [];
   for (let h = arr.length-1; h >= 0 ; h--){
      result.push(arr[h]);
   }
   console.log(result);
}

revarr([1,2,3,4,5,6]) //[6,5,4,3,2,1]