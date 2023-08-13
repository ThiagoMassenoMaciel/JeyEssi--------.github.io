//Create a lis of patients

// each patient into that list have

/*
  name
  age
  weight
  heigh
*/

//Write one list that contents names from patients


let patients = [
  {
    name: "Julia",
    age: 19 ,
    weight: 80 ,
    height: 160,
  }
  ,
  {
    name: "Joscelio",
    age: 23,
    weight: 86,
    height: 190,
  }
  ,
  {
    name: "Mariana",
    age: 5,
    weight:19,
    height: 178,
  }
]

let list_name = [];

for( let i of patients ){
  list_name.push(i.name);
}
alert(`::after`+list_name)
