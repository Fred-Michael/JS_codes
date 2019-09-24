//You are given an array of player objects for a competition of several games.
//Write a function that: Extract all the names of the players from the given array of user objects and return
//an array of names
//For example:
//register = [{name: ‘Tolu’, age: 54, game:’Chess’},{name: ‘Ikenna’, age: 19, game:’Catch’},
//{name: ‘Adammu’, age: 78, game:’FuzzBuzz’},{name: ‘David’, age: 23, game:’Chess’}] 
//this will return: [‘Tolu’, ‘Ikenna’,’Adammu’,’David’]

function playerName(arrofObj) {
   let result = [];
   for (let i = 0; i < arrofObj.length; i++) {
      if (arrofObj[i].hasOwnProperty("name")) {
         result.push(arrofObj[i].name)
      }
   }
   console.log(result);
}

playerName([{name: 'Tolu', age: 54, game:'Chess'},{name: 'Ikenna', age: 19, game:'Catch'},{name: 'Adammu', age: 78, game:'FuzzBuzz'},{name: 'David', age: 23, game:'Chess'}])