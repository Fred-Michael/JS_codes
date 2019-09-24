//Find the sum of all the ages in an array of objects

function sumAge(obj) {
   //code goes here
   let numbers = [];
   for (let i = 0; i < obj.length; i++) {
      numbers.push(obj[i].age)
   }
   const result = numbers.reduce((a,b) => a + b, 0)
   console.log(result);
}

sumAge([{name: 'Uche Egbo', age: 24, occupation: 'Trader'},{name: 'Solomon Ogbodo', age: 30, occupation: 'Accountant'}])