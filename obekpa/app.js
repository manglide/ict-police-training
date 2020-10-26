let myName ="Obekpa";
let hobby ="football";
function sayName(param1 = myName){ 
    alert('i am ' + param1 + ' and my hobby is' +hobby);
}
let headerElement = document.querySelector("header");
headerElement.innerHTML="Check Obekpa Port Folio";
let hourOfDay =24;
let greetingsMsg ="";
let paragraphElement =document.querySelector("p");
if (hourOfDay>12) {
    greetingsMsg ="Good Afternoon";
} else if(hourOfDay==12){

    greetingsMsg="it's Noon";
}
else{
    greetingsMsg="Good Morning";
}
paragraphElement.innerHTML= greetingsMsg;
let getAllParagraphs =document.querySelectorAll("p");
let secondParagraph =getAllParagraphs[1];
secondParagraph.setAttribute("id","secondParagraph");
let listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek =new Date().getDay();
switch(dayOfWeek){
    case 0:
        secondParagraph.innerHTML ="Today is Sunday";
        break;
    case 1:
        secondParagraph.innerHTML ="Today is Monday";
        break;
    case 2:
        secondParagraph.innerHTML ="Today is Tuesday";
        break;
    case 3:
        secondParagraph.innerHTML ="Today is Wednesday";
        break;
    case 4:
        secondParagraph.innerHTML ="Today is Thursday";
        break;
    case 5:
        secondParagraph.innerHTML ="Today is Friday";
        break;
    case 6:
        secondParagraph.innerHTML ="Today is Saturday";
        break;
    default:
        secondParagraph.innerHTML ="Today is could be any day";
}
//for loop structure;
let i = [1, 3, 9, 6];
let newList =[];
let ulElement =document.querySelector("ul.double-numbers");
for(let newNum=0; newList.length<i.length;){
    let double = i[newNum]*2;
    newList.push(double);
    let listElement =document.createElement("li");
    listElement.innerHTML = `when ${i[newNum]} is doubled we would have ${newList[newNum]}`;
    ulElement.appendChild(listElement);
    newNum++;
}
let listOfNumbers =[];
for(let i=10; listOfNumbers.length<=90; i++){
    listOfNumbers.push(i);
}
let counter =0;
let total =0;
while(counter < listOfNumbers.length){
    let currentNumber = listOfNumbers[counter];
    total = total + currentNumber;
    counter++;
}
document.querySelector("h3#total-number").textContent=`The Total Number sum up to ${total}`;


