/*
calc media Aritmetic
obj = {
  name
  grade1:
  grade2:
  result_final:
}

if >= 7 Congratulations
   < 7 Bad News
*/

const Students = [
  {
    name: "Carla",
    grade1: 3,
    grade2: 9,
  }
  ,
  {
    name: "Bruna",
    grade1: 9,
    grade2: 4.8,
  }
  ,
  {
    name: "Amélia",
    grade1: 7,
    grade2: 10,
  }
  ,
  {
    name: "Dário",
    grade1: 10,
    grade2: 0.5,

  }
]

const calcM = ( obj)=>{

  let r = (obj.grade1 + obj.grade2 )/2;

  return r;
}

for(let student of Students){
  let bool = calcM(student);
  alert(`The student ${student.name} have the result ${bool} 
  \n${bool >= 7 ? "you've gonne this concurse , Congratulations " + student.name : "You didn't got it"}`)
}