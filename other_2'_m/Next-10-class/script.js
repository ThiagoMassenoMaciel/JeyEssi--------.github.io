// calculate imc of each patient 
//      and display menssage 
//           Patient obj.name have the IMC called function  
//           display value of calc just 2  numbers after the comma 

//DETAILS 
/*         You already have a  list of patients , discover the IMC of each          
           patient and display the result just floatting 2 numbers        
           .toFixed(2)

           Patient X  have IMC : y 

           x = name of object(Patient)
           y = calc IMC


           CREATE A FUNCTION THAT RETURNS calc IMC

           VERSIONS 1,2,3,4
              into the function use template literals (Parameter full obj)
           VERSION 5
              into the other subfunction just use calc  (Parameter : just values PESO ALTURA) and returns to the actual function

//VERSÃO 1     LOT OF TIMES ( calling function --> into alert  )for each element  obj from array 

//VERSÃO 2     VERSÃO1 "" + loop calling function once calling function and return

//VERSÃO 3    function calling into a variable 

//VERSÃO 4    arrow function     ()=>{ } 

//ideas    each patient obj have your own method to calculate your own IMC 

//class   create one function to not repeat the calc into the each object 
// \ \   \_ This way is more efient then first
//  \ \____Call this function into each element from array and the returns is imc into a property on EACH OBJECT
//   \_____it changes just the parameters And don't forget to managment the height 100 to 1.0

*/
/*
         const Patients = [
            {
               name: "Leandro",
               age: 27,
               weight: 93,
               height: 170,
            }
            ,
            {
               name: "Lais",
               age: 18,
               weight: 72.2,
               height: 152,
            }
            ,
            
            {
               name: "Luzia",
               age: 23,
               weight: 84,
               height: 130,
            }
         ]


         alert(`The Patient ${Patients[0].name} have IMC: ${(Patients[0].weight    /   ( (Patients[0].height/100)**2)).toFixed(2)}`)
         alert(`The Patient ${Patients[1].name} have IMC: ${(Patients[0].weight    /   ( (Patients[1].height/100)**2)).toFixed(2)}`)
         alert(`The Patient ${Patients[2].name} have IMC: ${(Patients[2].weight    /   ( (Patients[1].height/100)**2)).toFixed(2)}`)

         */


/*USANDO FOR TRADICIONAL
      const Patients = [
         {
            name: "Leandro",
            age: 27,
            weight: 93,
            height: 170,
         }
         ,
         {
            name: "Lais",
            age: 18,
            weight: 72.2,
            height: 152,
         }
         ,
         
         {
            name: "Luzia",
            age: 23,
            weight: 84,
            height: 130,
         }
      ]

      for( let index = 0; index < Patients.length ;  ++index){
         alert(`The Patient ${Patients[index].name} have IMC: ${(Patients[index].weight    /   ( (Patients[index].height/100)**2)).toFixed(2)}`)
      }

      */
/*
//VERSION 1
      const Patients = [
         {
            name: "Leandro",
            age: 27,
            weight: 93,
            height: 170,
         }
         ,
         {
            name: "Lais",
            age: 18,
            weight: 72,
            height: 152,
         }
         ,
         
         {
            name: "Luzia",
            age: 23,
            weight: 84,
            height: 130,
         }
      ]
      function calc(object){
         alert(`The Patient ${object.name} have IMC: ${(object.weight / ((object.height/100)**2)).toFixed(2)}`)
      }

      calc(Patients[0]);
      calc(Patients[1]);
      calc(Patients[2]);

//Version 2

      const Patientss = [
         {
            name: "Leandro",
            age: 27,
            weight: 93,
            height: 170,
         }
         ,
         {
            name: "Lais",
            age: 18,
            weight: 72,
            height: 152,
         }
         ,
         
         {
            name: "Luzia",
            age: 23,
            weight: 84,
            height: 130,
         }
      ]
      function calc(object){
         return alert(`The Patient ${object.name} have IMC: ${(object.weight / ((object.height/100)**2)).toFixed(2)}`)
      }

      for( let element of Patientss){
         calc(element)
      }

//Version 3

      const Patientss = [
         {
            name: "Leandro",
            age: 27,
            weight: 93,
            height: 170,
         }
         ,
         {
            name: "Lais",
            age: 18,
            weight: 72,
            height: 152,
         }
         ,
         
         {
            name: "Luzia",
            age: 23,
            weight: 84,
            height: 130,
         }
      ]

      function calc(object){
         let variable = 
         alert(`The Patient ${object.name} have IMC: ${(object.weight / ((object.height/100)**2)).toFixed(2)}`)
         ;
         return variable; 
      }

      for( let element of Patientss){
         calc(element)
      }

//Version 4

const Patientss = [
   {
      name: "Leandro",
      age: 27,
      weight: 93,
      height: 170,
   }
   ,
   {
      name: "Lais",
      age: 18,
      weight: 72,
      height: 152,
   }
   ,
   
   {
      name: "Luzia",
      age: 23,
      weight: 84,
      height: 130,
   }
]

const calc = (object)=>{
   let variable = 
   alert(`The Patient ${object.name} have IMC: ${(object.weight / ((object.height/100)**2)).toFixed(2)}`)
   ;
   return variable; 
}

for( let element of Patientss){
   calc(element)
}
*/


//Version 5

const Patientss = [
   {
      name: "Leandro",
      age: 27,
      weight: 93,
      height: 170,
   }
   ,
   {
      name: "Lais",
      age: 18,
      weight: 72,
      height: 152,
   }
   ,
   
   {
      name: "Luzia",
      age: 23,
      weight: 84,
      height: 130,
   }
]
const sub= (weight , height)=>{
   let calc = weight / (height/100)**2 

   return calc.toFixed(2)
}

const calc = (object)=>{
   let variable = 
   alert(`The Patient ${object.name} have IMC: ${sub(object.weight, object.height  )}`)
   ;
   return variable; 
}

for( let element of Patientss){
   calc(element)
}