

let flag = false;

let counter = 0;
/*   Math.round(Math.random() * 10)  */
let random = Math.round(Math.random() * 10) ;

let tryy = "";

alert("You are here to try to guess the number (beetween 0 and 10) that i'm thinking")

tryy = Number(prompt("Digit the number , right now :"));

++counter;

while(flag == false){
  


  if (tryy === random){
    flag = true;
  }else{
    tryy = Number(prompt("Try again: "));
    ++counter;
  }

}

alert(`Congratulations! I was thinking at the number ${random}. You tried ${counter} times`);