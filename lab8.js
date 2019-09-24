//Return True or False if a word is a Palindrome
//Hint: a palindrome is a word that can be spelt backwards and looks the same

function isPalindrome(word) {
   let forward = ""; let backward = ""
   for (let i = 0; i < word.length; i++) {
      forward += word[i]
   }
   for (let i = word.length - 1; i >= 0; i--) {
      backward += word[i]
   }
   (forward == backward) ? console.log(true) : console.log(false)
}

isPalindrome("lllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllll")