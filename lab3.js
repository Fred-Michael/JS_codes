//Find the total age of the applicants that applied for this interview from the given record below.
//For example…
//totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]) should return 63
//totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]) should return 96

function totalAge(obj) {
   //code goes here
   let numbers = [];
   for (let i = 0; i < obj.length; i++) {
      numbers.push(obj[i].age)
   }
   const result = numbers.reduce((a,b) => a + b, 0)
   console.log(result);
}

totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 }, { name: "AZX", age: 22 }])