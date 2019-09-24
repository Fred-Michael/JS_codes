//Given an array of objects containing user’s information, assign a default age X for any user that
//did not enter his/her age and return the array.

//Example: checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33) to return
//([{ name: "XYZ", age: 23 }, {name: "ABC", age: 33}]

//checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55) to return
//([{ name:"XYZ", age: 55 }, { name: "ASD", age: 55 }, { name: "CVB", age: 33 }])

function checkAge (arr, num) {
   //code goes here
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty('age') == false) {
         arr[i].age = num;
      }
   }
   console.log(arr);
}

checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55)