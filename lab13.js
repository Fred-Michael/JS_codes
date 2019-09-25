//You are given an array of player objects for a competition of several games.
//Write a function that returns all the names of the players for a certain game from the given array of user objects
//For example:
//register = [{name: ‘Tolu’, age: 54, game:’Chess’},{name: ‘Ikenna’, age: 19, game:’Catch’},
//{name: ‘Adammu’, age: 78, game:’FuzzBuzz’},{name: ‘David’, age: 23, game:’Chess’}] 
//When you run playerNames(register, ‘Chess’) this will return [‘Tolu’, ‘David’]

function playerNames(arrOfObj, sport) {
   let result = [];
   for (let i = 0; i < arrOfObj.length; i++) {
      if (arrOfObj[i].hasOwnProperty("name") && arrOfObj[i].game == sport) {
         result.push(arrOfObj[i].name)
      }
   }
   console.log(result);
}
playerNames([{name: 'Tolu', age: 54, game:'Chess'},{name: 'Ikenna', age: 19, game:'Catch'},{name: 'Adammu', age: 78, game:'FuzzBuzz'},{name: 'David', age: 23, game:'Chess'}], "Chess")