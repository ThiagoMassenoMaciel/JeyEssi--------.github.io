const List_Obj = [
  {
    name: "Leandro",
    age: 23,
    weight: 94.5,
    height: 183,
  }
  ,
  {
    name: "Sabrina",
    age: 19,
    weight: 73,
    height: 168.6,
  }
  ,

  {
    name: "Ariadne",
    age: 26,
    weight: 95.5,
    height: 193,
  }
]

const list_names =[];

for(let element of List_Obj){

  list_names.push(element);
}


for( let i of list_names){
  alert( `
  ${i.name} are ${i.age} year old 
  and your weight ${i.weight} 
  and your height  ${i.height}\n`);
}
