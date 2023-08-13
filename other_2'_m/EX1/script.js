/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

*/

let number_One = Number(prompt("Digite number one :"))
let number_two = Number(prompt("Digite number two :"))

alert(`The SUM of them ${number_One+number_two}`)

alert(`The SUBTRACTION of them ${number_One-number_two}`)

alert(`The MULTIPLICATION of them ${number_One*number_two}`)

alert(`The DIVISION of them ${number_One/number_two}`)

alert(`The REMINDER of them ${number_One%number_two}`)

let par_ou_impar = (number_One+ number_two)%2 ;

let test = par_ou_impar === 0 ? `Par ` : `impar`;

alert(`The SUM of THEM is a number ${ test }`)

let same_numbers =     number_One === number_two ? `are` : `aren't`;

alert(`both numbers you typped ${same_numbers} the same`)




