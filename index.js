'use strict';
// let age=parseInt(prompt("how old are you?"))
// if(age<16){
//     console.log("you don't allowed to have an id")
// }else{
//     console.log("come to pick your ID")
// }



const country='Rwanda';
const continent='Africa';
let population=120000000;
const isIsland=false;
let language;
language="Kinyarwanda"
population=130000000;
language="igikiga"

console.log(isIsland,continent,population,country,language)

let age=parseInt(prompt("how old are ?"));
age>21? console.log("wemerewe kunywa inzoga"):age>=17 && age<=20 ? console.log("nywa amazi"):console.log("dronk juice")


function ageId(){
    let age=parseInt(document.querySelector(".age").value)
 
   if(age!==age){
    alert("age should be a number")
   }else if(age<16){
    alert("You are not allowed to have an id")
   }
   else{
    alert("your age is "+age +" "+"yoou can pick your id")
   }

   
}
// if(age){
//    console.log("you have age to take Id")
// }else{
//     console.log("you are not allowed to have an id")
// }
// document.querySelector('h3').innerHTML=num

document.querySelector(".lamp").style.display="flex"




function answer (){
    let number1=parseInt(document.querySelector('#num1').value); 
let number2=parseInt(document.querySelector('.num2').value);
  console.log(number2)

   let  ans=  number1+ number2;
   document.querySelector("h3").innerHTML=ans// document.querySelector('h3').innerHTML=answer
    

}


function sub(){
   
    
   let  answers=number1-number2
    document.querySelector('h3').innerHTML=answers
}
document.querySelector('h3').style.color='red'

function dates(){
    let todays=Date()
    document.querySelector(".date").innerHTML=todays
}
function turnOn(){
    document.querySelector('.myLamp').src="data:image/jpeg;base64,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"
}
function turnOff(){
   document.querySelector(".myLamp").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvilbXCmxIudB-HTJEGCrFfsq8tG6BHLMaw&usqp=CAU"
}


function submit(){
let geography=parseInt(document.querySelector('.geo').value);
let economy=parseInt(document.querySelector('.eco').value);
let history=parseInt(document.querySelector('#hi').value);
let average=(geography+economy+history)/3

if(geography!==geography || economy!==economy || history!==history){
alert("put the right number")
}
if(geography>100 || geography<0 || economy>100 || economy<0 || history<0 || history>100){
    alert("number should be between 0 and 100")
}
else if(average<=100 &&  average>=80){
  
    document.querySelector(".average").innerHTML=average
    document.querySelector('.grade').innerHTML='A';
   

}else if(average<=79 &&  average>=70){
  
    document.querySelector(".average").innerHTML=average
    document.querySelector('.grade').innerHTML='B';
   

}
else if(average<=69 &&  average>=60){
  
    document.querySelector(".average").innerHTML=average
    document.querySelector('.grade').innerHTML='C';
   

}else if(average<=59 &&  average>=50){
  
    document.querySelector(".average").innerHTML=average
    document.querySelector('.grade').innerHTML='D';
   

}else if(average<=49 &&  average>=0){
  
    document.querySelector(".average").innerHTML=average
    document.querySelector('.grade').innerHTML='FAIL';
   

}

}