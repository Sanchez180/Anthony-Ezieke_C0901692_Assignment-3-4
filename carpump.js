class Car {
    
  constructor(Id,Brand, Model, Year, Color, Price, Gas) {
    this.Id = Id;
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
    this.Price = Price;
    this.Gas = Gas;
   
  };

 
  Honk() {
   
    return this.Brand +"-Tuut Tuut"
  }
}

//object of Cars initialized
let car1 = new Car(
  (Id = 1),
  (Brand = "Honda"),
  (Model = " CR-V"),
  (Year = 2023),
  (Color = "Red"),
  (Price = 50000),
  (Gas = 45)
);
let car2 = new Car(
  (Id = 2),
  (Brand = "Ford"),
  (Model = " F-150"),
  (Year = 2020),
  (Color = "Black"),
  (Price = 25000),
  (Gas = 30)
);
let car3 = new Car(
  (Id = 3),
  (Brand = "BMW"),
  (Model = "X5"),
  (Year = 2022),
  (Color = "Green"),
  (Price = 60000),
  (Gas = 65)
);
let car4 = new Car(
  (Id = 4),
  (Brand = "Mazda"),
  (Model = "CX-5"),
  (Year = 2019),
  (Color = "White"),
  (Price = 15000),

  (Gas = 60)
);
let car5 = new Car(
  (Id = 5),
  (Brand = "Audi"),
  (Model = "Q7"),
  (Year = 2018),
  (Color = "Silver"),
  (Price = 52000),
  
  (Gas = 47)
);
let car6 = new Car(
  (Id = 6),
  (Brand = "Kia"),
  (Model = "Forte"),
  (Year = 2020),
  (Color = "Blue"),
  (Price = 21000),
  
  (Gas = 56)
);

let listOfCarsInRace = [car1,car2,car3,car4,car5,car6];
//method name for html
async function runRace(){
let date = new Date();
 let dateyear =  date.getFullYear();
let aTurnLitres = 5;
let aYearDifferenceLossLitres = 1;
let ageDifference =0;
let netGasLitresRemaining = 0;
let currentCar = new Car();
ageDifference = dateyear -  car1.Year;

// check years difference btw current year and car year
car1['Gas']= car1.Gas - (ageDifference * aYearDifferenceLossLitres);
let ageDifference2 = dateyear -  car2.Year;
car2['Gas']= car2.Gas - (ageDifference2 * aYearDifferenceLossLitres);
let ageDifference3 = dateyear -  car3.Year;
car3['Gas']= car3.Gas - (ageDifference3 * aYearDifferenceLossLitres);
let ageDifference4 = dateyear -  car4.Year;
car4['Gas']= car4.Gas - (ageDifference4 * aYearDifferenceLossLitres);
let ageDifference5 = dateyear -  car5.Year;
car5['Gas']= car5.Gas - (ageDifference5 * aYearDifferenceLossLitres);
let ageDifference6 = dateyear -  car6.Year;
car6['Gas']= car6.Gas - (ageDifference6 * aYearDifferenceLossLitres);


//counting the seven turns
for(let numberOfturn = 1; numberOfturn <=7 ; numberOfturn++){
  let display =`Car Race: Turn ${numberOfturn} => `;

  
    currentCar = car1; 
    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    if( currentCar.Gas > 4 ){
    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
   
    //concatenating the values
    display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;
    }

   currentCar = car2; 

   //getting the difference of the fuel
   netGasLitresRemaining = currentCar.Gas - aTurnLitres;
   if( currentCar.Gas > 4 ){

   //modifying the Gas change
   currentCar['Gas']=netGasLitresRemaining;
   //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;
   }

  currentCar = car3; 
  //getting the difference of the fuel
  netGasLitresRemaining = currentCar.Gas - aTurnLitres;
  if(netGasLitresRemaining > 1){

  //modifying the Gas change
  currentCar['Gas']=netGasLitresRemaining;
  //concatenating the values
  display += `[`;
  display += `Brand: ${currentCar.Brand},     `;
  display += `Gas: ${currentCar.Gas}, `;
  display += `]`;
  }

 currentCar = car4; 
    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    if(netGasLitresRemaining > 4){

    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
    //concatenating the values
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Gas: ${currentCar.Gas}, `;
     display += `]`;
    }

   currentCar = car5; 
   netGasLitresRemaining = currentCar.Gas - aTurnLitres;
   if(netGasLitresRemaining > 4 ){

   currentCar['Gas']=netGasLitresRemaining;
   display += `[`;
   display += `Brand: ${currentCar.Brand},     `;
   display += `Gas: ${currentCar.Gas}, `;
   display += `]`;
   }

  currentCar = car6; 
    //getting the difference of the fuel
    netGasLitresRemaining = currentCar.Gas - aTurnLitres;
    if(netGasLitresRemaining > 4 ){

    //modifying the Gas change
    currentCar['Gas']=netGasLitresRemaining;
    //concatenating the values
  display += `[`;
  display += `Brand: ${currentCar.Brand},     `;
  display += `Gas: ${currentCar.Gas}, `;
  display += `]`;
    }
  //display the value of each turn in html
 
 document.getElementById(`car${numberOfturn}`).innerHTML = display;

 
}

let woncar = await getWonCar();
console.log(woncar);
document.getElementById(`raceResult0`).innerHTML = `END OF RACE`;
document.getElementById(`raceResult`).innerHTML = `Hurray! Hurrar! Hurray!  The winner of the race is ${woncar.Brand}`;
 document.getElementById(`raceResult2`).innerHTML = `Car Detail=> Brand- ${woncar.Brand},  Model- ${woncar.Model}, Color- ${woncar.Color}, Gas- ${woncar.Gas}, Price- ${woncar.Price}, Year- ${woncar.Year}`;
 
var container = document.getElementById('honkcar0');
var container2 = document.getElementById('car0');
var container3 = document.getElementById('startbtn');
container2.removeAttribute('hidden')

container.setAttribute('hidden',true)
container3.setAttribute('hidden',true)
}


function HonkCars(){
 
    document.getElementById('honkcar1').innerHTML = car1.Honk();
    document.getElementById('honkcar2').innerHTML = car2.Honk();
    document.getElementById('honkcar3').innerHTML = car3.Honk();
    document.getElementById('honkcar4').innerHTML = car4.Honk();
    document.getElementById('honkcar5').innerHTML = car5.Honk();
    document.getElementById('honkcar6').innerHTML = car6.Honk();
 
    var container = document.getElementById('honkcar0');
    var container2 = document.getElementById('car0');
    container.removeAttribute('hidden')
   
    container2.setAttribute('hidden',true)
}

function setNotification2(){

   location.reload() 

}

function setNotification(){
  var remember = document.getElementById("notificationcheckbox");


  var container = document.getElementById('notifcontainer');
  var container2 = document.getElementById('notifcontainer2');


  remember.setAttribute('checked',true)
  container.removeAttribute('hidden')
  container2.removeAttribute('hidden')

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


async function getWonCar() {
  let woncar = listOfCarsInRace.find(m=>m.Id == getRandomInt(6) && m.Gas > 0);
  if(woncar){
    return woncar;
  }else{
    getWonCar
  }
}



