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


let choose_option;
let shopping_list = [];

while(choose_option != 3 ){

  choose_option = Number( prompt(` 
      Hi user! Come over here and choose one option below :

      1. Sign up one item to shopping list
      2. Show items enrolled
      3. Quit the program` )
  )

  if (choose_option == 1 ){
    let item = prompt("Sign up one item to shopping list. And the name is ?")
    shopping_list.push(item)
  }else 
      if(choose_option == 2){

        if(shopping_list.length == 0){
          alert("The list didn't have any item");
        }
        alert(shopping_list)
      }
}

