// get 10  items
// show them separates with the comma beetween then

//CHALLENGE 5.1
alert("Named 10 items to your shopping list: ")
let list = [];
for( let a = 0 ;  a < 10; ++a){
  let item = prompt(`Digit the name of your ${(a + 1 )}ºItem`);
  list [a]= item;
}

alert(list);