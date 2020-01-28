// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays
// have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples:
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]. comp(a, b) returns true because in b 121 is the square of 11,
// 14641 is the square of 121, 20736 the square of 144, and so on.
// It gets obvious if we write b's elements in terms of squares:


// Invalid arrays
// If we change the first number to something else, comp may not return true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] comp(a,b) returns false
// because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361] comp(a,b) also returns false
// because in b 36100 is not the square of any number of a.
// Note:
// a or b might be [] or null. If a or b are null (or nil or None), the problem doesn't make sense so return false.


function comp(array1, array2){
  let result = [], answer; 
  if (array1 == null || array2 == null) {
    return false
  } else {
    var sorted_array1 = array1.sort((a,b) => a - b);
    var sorted_array2 = array2.sort((a,b) => a - b);
  }
  
  for (let i = 0; i < sorted_array1.length; i++) {
    for (let k = 0; k < sorted_array2.length; k++) {
      if (i === k) {
        if (Math.floor(Math.pow(sorted_array1[i],2)) === sorted_array2[k]) {
          result.push(true);
        } else {
          result.push(false);
        }
      }
    }
  }
  answer = result.includes(false) ? false : true;
  return answer;
}