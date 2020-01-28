// [FizzBuzz Program]: Write a program that uses console.log to print all the numbers from 1 to 30, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5, print "Buzz" instead.
// Modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 while still printing "Fizz" or "Buzz"
// for 3 or 5 respectively

for (let i = 1; i <= 30; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
     console.log("FizzBuzz");
   } else if(i % 3 === 0) {
      console.log("Fizz");
   } else if(i % 5 === 0) {
      console.log("Buzz");
   }
}