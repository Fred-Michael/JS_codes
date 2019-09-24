//Given this string “+7n10 +100 -2n5”
//Notation is XnY
//X is the box
//Y is the weight
//To get weight of one box you multiply X and Y,
//For example “+9n10 -2n10” will return 70

function boxweight(str) {
   let arrayed_str = str.split(" "); let result = []; let test;

   function mul(arr) {
      return arr[0] * arr[1];
   }
   for (let i = 0; i < arrayed_str.length; i++) {
      if (arrayed_str[i].includes("n")) {
         test = arrayed_str[i].split("n");
         result.push(mul(test));
      } else {
         continue
      }
   }
   console.log(result.reduce((a,b) => a + b, 0));
}

boxweight("+7n10 +100 -2n5")