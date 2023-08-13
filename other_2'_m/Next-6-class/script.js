//Capture 10 items from the user to full a shopping list 
// After stored , Displayed each by one and separate per comma
//what i did was CHALLENGE 5.0 what i must to did ? 5.1 way that was teaching on the class 

alert("Right now , You must to full your shopping list by 10 items! \nGO Rush ");
const shopping_list = [10]

for( let i = 0 ; i < 10 ; i ++){
  shopping_list[i] = prompt(`Digite the name of your ${i+1}º item`)
}

//display let i = string convertion string to number for to sum +1 
for (let i in shopping_list){
  i = Number(i);
  alert(`the ${i+1}º Item ---| ${shopping_list[i]} |--- from your shopping list  ,  `)
}
console.log("for in")
for( let i in shopping_list){
  console.log(i, shopping_list[i]);
}
console.log("for of")
for( let i of shopping_list){
  console.log(i, shopping_list[i]);
}