//Display to user : guess the number i'm thinking beetween 0 and 10 

//Must create a logic to build one number random , 
//and verify if its the same

//Untill the user didn't  guessed that display the menssage : Error , try again

//I the user find display menssage : Congratulations! you've gonne after x tries


alert("You must guess what number ( beetween 0 and 10 ) i am thinking")
let number_user = Number(prompt("Choose the number"))
const random_number = Math.round(Math.random() * 10)
let counter = 1;

while( number_user !== random_number){
 number_user = Number(prompt("Error , try again:"))
 ++counter;
}

alert(`Congratulations! I was really thought this number ${random_number}. You've gonne after tried ${counter} times`)

console.log(`numero : ${ number_user} aleatorio : ${ random_number} => : ${number_user !== random_number}`);


















/*
let a = Math.random()
alert(typeof a + a )

*/


/*
let a = Math.random() * 10;
alert(typeof a + a )
*/

/*

let a = Math.random() * 10;
alert( a )

*/

/*
What is the condition to stop the loop ?   
is when the flag becomes true ---> 
what is the opositive ?   
false ---->put it on expression
*/

/*
i still dont know why this becomes infinit

let number_user = Number(prompt("Choose the number"))
const random_number = Math.round(Math.random() * 10)
let counter = 1;

let flag = number_user === random_number;

while(flag === false){
 number_user = Number(prompt("Error , try again:"))
 ++counter;
}

alert(`Congratulations! I was really thought this number ${random_number}. You've gonne after tried ${counter} times`)

console.log(`numero : ${ number_user} aleatorio : ${ random_number} => : ${flag}`);


*/