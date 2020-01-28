// Write a function that finds the factorial of a number (using recursion)


function factorialize(num) {
  let result = num;
  if (num == 0) {
    return 1
  }
  while (num > 1) {
    result *= (num-1);
    num--;
  }
  return result;
}