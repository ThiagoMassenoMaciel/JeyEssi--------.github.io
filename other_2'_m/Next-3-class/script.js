//CHALLENGE 2
alert("Let's sum two numbers , right now ?")
let number_one = prompt("Digit the first number to sum")
let number_two = prompt("Digit the second number to sum")

let result = Number(number_one) + Number(number_two);

console.log(typeof number_one , number_one,"\n",
typeof number_two, number_two, "\n",
typeof result, result)

alert(`${number_one} + ${number_two} = ${result}`);