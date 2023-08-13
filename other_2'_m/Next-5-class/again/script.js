alert("Welcome to know your final result : Starts tell me your name : Ok ? ")
let n = prompt("write it here")
let g1 = Number(prompt("grade1:"))
let g2 = Number(prompt("grade2:"))
let g3 = Number(prompt("grade3:"))

calc = (g1 + g2 + g3 )/3;

calc.toFixed(2);

flag = calc >= 6;

if (flag){
  alert(`Congratilations  ${n}, you passed this bimester look at your grade note ${ calc}`)
}else{
  alert(`Wasn't this time ${n} :( But don't give up , you have more one chance . No pain no game - dont forget that .`)
}