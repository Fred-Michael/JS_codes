// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
  // return incrementedString
  for(let i = 0; i < strng.length; i++){
    if(!isNaN(parseInt(strng[i], 10))){
      let x = strng.slice(0, i);
      const len = strng.slice(i).length;
      let b = parseInt(strng.slice(i), 10);
      let y = b + 1;
      let lee = y.toString().length;
      if(lee < len){
        const diff = len - lee;
        let answer = x + "0".repeat(diff) + y;
        return answer
      }
      return x + y;
    }
  }
  return strng + "1";
}