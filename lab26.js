// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
// Examples: pigIt('Pig latin is cool'); => igPay atinlay siay oolcay, pigIt('Hello world !');  => elloHay orldway !.

function pigIt(str){
  //Code here
  let letters = /^[A-Za-z]+$/, result = [], input = str.split(" "), merge = "";
  for (let i = 0; i < input.length; i++) {
    if(input[i].match(letters)){
      for (let j = 1; j < input[i].length; j++) {
        merge += input[i][j];
      }
      merge += input[i][0]; merge += 'ay'; result.push(merge); merge = "";
    } else{
      result.push(input[i]);
    }
  }
  let final = result.join(" ");
  return final;
}