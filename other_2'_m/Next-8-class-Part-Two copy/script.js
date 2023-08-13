// build in 1h 

//Create a menu with this menssage
/*
 Hi user! Come over here and choose one option below :
 1. Sign up one item to shopping list
 2. Show items enrolled
 3. Quit the program

 You must to capture the number and switch for each case

 case 1:
  Sign up one item to shopping list

 case 2:
  !shopping.list.IsEmpty
  ?
  Show items enrolled
  :
  Display menssage  Doesn't exist any item enrolled

  case 3:
  quit the program
*/

/* VERSÃO 1

let number = Number(prompt(`
Hi user! Come over here and choose one option below :

  1. Sign up one item to shopping list
  2. Show items enrolled
  3. Quit the program
`))

if (number == 1 ){
  let add = prompt("Type the name of item you wanna into your list:");
  const list = [];
  list.push(add)
}

if ( number == 2 ){
  alert(list)
}

if ( number == 3 ){
  alert(".:Bye:.")
}

ERROR doenst show list cuz she is empty
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/



/* VERSAO 2
let number = Number(prompt(`
Hi user! Come over here and choose one option below :

  1. Sign up one item to shopping list
  2. Show items enrolled
  3. Quit the program
`))
const list = [];

list[0] = "a";

if (number == 1 ){
  let add = prompt("Type the name of item you wanna into your list:");
  list.push(add)
  
}

if ( number == 2 ){
  if(list.lenght > 0){
    alert("There isn't any item into the list")
  }
  alert(list)
}

if ( number == 3 ){
  alert(".:Bye:.")
}

ERROR just have to end the program if the option's value === 3
ERROR doesnt show if the option 2 dooesn't have ITEMS ON A LIST
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/ 
// VERSÃO 3
// After use one of options must to display again MENU
/*

path  
menu
    user 1 
        show option1
            userItem = NewItem
                  Array.push(userItem)
                      go back to the menu DISPLAY
menu 
    user = 2 
        show option2
            exist : display array 
            not exist: display sms 
                go back the menu DISPLAY
menu 
    user = 3 
        show option3 
        alert bye 
            end 
end   
*/

// what paterns you realize ?   Just repeat if the value of option wasn't 3 
// what is the conditional final to stop loop ?      then number of option === 3   -> make the opositive


/*

let number;
const a = [];

while(number !== 3){
  number = Number(prompt(`
  Hi user! Come over here and choose one option below :

    1. Sign up one item to shopping list
    2. Show items enrolled
    3. Quit the program
  `))

  if (number == 1 ){
    let add = prompt("Type the name of item you wanna into your list:");
    a.push(add);
  }

  if ( number == 2 ){
    
    if(a.length < 1){
      alert("There isn't any item into the list");
    }else{
      alert(a);
    }

  }
  if ( number == 3 ){
    alert(".:Bye:.")
  }
}

*/

// Error : sintaxe length != lenght 

//Verão 4 
//IN ORDER TO USE  IF ELSE / LETS USE SWITCH CASE 

let number;
const a = [];

while(number !== 3 ){
  number = Number(prompt(`
  Hi user! Come over here and choose one option below :

    1. Sign up one item to shopping list
    2. Show items enrolled
    3. Quit the program
  `))

  switch(number){

    case 1:
      let add = prompt("Type the name of item you wanna into your list:");
      a.push(add);
    break

    case 2:
      if(a.length < 1){
        alert("There isn't any item into the list");
      }else{
        alert(a);
      }
    break

    case 3:
      alert(".:Bye:.")
    break

    default: 
      alert(`Invalid number ${number} . Try again`)
  }

}