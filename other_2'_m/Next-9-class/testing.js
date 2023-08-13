//Create a lis of patients

// each patient into that list have

/*
  name
  age
  weight
  heigh
*/

//Write one list that contents names from patients


const patients = [];


const person1 = {
  name: "Ana",
  age: 23,
  weight: 69.5,
  height: 1.83
}


const person2 = {
  name: "João",
  age: 19,
  weight: 80,
  height: 1.43
}

alert(`Patients : ${patients}\n Objexcts \n:${person1}\n:${person2}\n`);

patients.push(person1.name);

patients.push(person2.name);

alert(patients);