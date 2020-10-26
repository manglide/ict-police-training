let myName="AP/No 158495 DSP A. A. Umar";
let hobby="Basket-Ball";
let hourOfDay = 12;
let greetMsg=" ";
let paragraphElement=document.querySelector("p");

function sayName(params=myName) {
    alert('I am ' + params + ' and my hobby is ' + hobby);
  let headerElement=document.querySelector("header");
headerElement.innerHTML="JS Site Developed by A. A. Umar"; 


if (hourOfDay>12) 
{
    greetMsg="Good Afternoon!";
} else if (hourOfDay == 12) 
{
    greetMsg="Its noon already!";    
} 
else
{
    greetMsg="Good morning!";
} 

paragraphElement.innerHTML=greetMsg;
}

let getAllParagraphs=document.querySelectorAll("p"); 
let secondParagraph=getAllParagraphs[1];
secondParagraph.setAttribute("id", "Second Paragraph");
let listOfDays=["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOfWeek=new Date().getDay();
switch (dayOfWeek) {
    case 0: 
    secondParagraph.innerHTML="Today is Sunday";
        break;
    case 1: 
    secondParagraph.innerHTML="Today is Monday";
        break;
    case 2: 
    secondParagraph.innerHTML="Today is Tuesday";
        break;
    case 3:
    secondParagraph.innerHTML="Today is Wednesday";
        break;
    case 4:
    secondParagraph.innerHTML="Today is Thursday";
        break; 
    case 5:
    secondParagraph.innerHTML="Thank God its Friday (TGIF)";
        break;  
    case 6:
    secondParagraph.innerHTML="Today is Saturday";
        break;      
    default:
    secondParagraph.innerHTML="This could be any day";
}
let i=[1,3,9,6];
let newList=[];
let ulElement = document.querySelector("ul.double-numbers");
for (let newNum =0; newNum<i.length;){
    let double = i[newNum] * 2;
    newList.push(double);
    let listElement=document.createElement("li");
    listElement.innerHTML = `when ${i[newNum]} is doubled we would have ${newList[newNum]}`
    alert(`when ${i[newNum]} is doubled we would have ${newList[newNum]}`)
    ulElement.appendChild(listElement);
    newNum++;
}

let listOfNumbers=[]
for (let i=10; listOfNumbers.length<=90; i++) {
    listOfNumbers.push(i);
}

let counter=0;
let total=0;

while (counter < listOfNumbers.length) {
    let currentNumber=listOfNumbers[counter];
    total = total + currentNumber;
    counter++;
}

document.querySelector("h3#total-number").textContent= `The total number sum up to ${total}`;
