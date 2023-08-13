//CHALLENGE-4

//GET NAME OF STUDENT 
//GET HIM 3 GRADES (Nota)   what grade did you get on the first / second / third test  ?
//return the AVERAGE  together NAME HIM , 
// DEPENDING ON THE GADES motivate him if was bad grate , and say Congratulations if it wasn't it 

// ERROR : i tried put .toFixed(2) one variable constant

alert("Over here to know your Average grade note")
const name_student = prompt("First Of all tell me your name :")

alert(`Hi ${name_student} , right now you need to tell me your grades on this bimester`)

const grade1 = Number(prompt("What grade did you get on the first test ?"))
const grade2 = Number(prompt(`Hey ${name_student} , and the second test ?`)) 
const grade3 = Number(prompt("What grade did you get on the third test ?"))

let result = (grade1 + grade2 + grade3 )/3;

result = result.toFixed(2);

result >= 6 
?
alert(`Congratulations ${name_student} , you passed this bimester :) \n Look at your grade:  ${result}`)
: 
alert(` ${name_student }, This wasn't your time :(    -> ${result} . Don't give up, even you didn't moved to the next quarter ... you have more one chance, keep going.`)

/*
Olá, este é o Bing. Uma possível maneira de dizer em inglês que você passou de bimestre na escola é **you moved on to the next quarter**⁴. Essa frase significa que você avançou para o próximo período de dois meses. Outra opção é **you passed the bimester**. Essa frase significa que você foi aprovado no bimestre. Espero que isso ajude. 😊

Source: Conversation with Bing, 8/11/2023
(1) Como dizer "passar de ano na escola" em inglês - English Experts. https://www.englishexperts.com.br/forum/como-dizer-passar-de-ano-na-escola-em-ingles-t6862.html.
(2) . https://bing.com/search?q=como+dizer+em+ingles+voce+passou+de+bimestre+na+escola.
(3) Google Tradutor. https://translate.google.com.br/.
(4) Como dizer "bimestre", "trimestre" e "semestre" em inglês. https://www.englishexperts.com.br/forum/como-dizer-bimestre-trimestre-e-semestre-em-ingles-t73504.html.
*/



//CHALLENGE 4.1 a quela nota da minha faculdade fazer um negocio desses USETHIS CODE 
//if the MEDIA = vp1 + vp2 /2     >=7   ?  passed the semester doens't need to make PROVE FINAL  :   go to the FINAL PROVE

