var firstName = prompt("FIRST NAME PLEASE: ")
var  lastName = prompt("LAST NAME PLEASE: ")
var age = prompt("how old are you: ")
var hieght = prompt("what is your hieght: ")
var petName = prompt ("what is your petname? ")
alert("Thank you so much for all your information!")


var  nameCond = null;
var ageCond = null;
var hieghtCond = null;
var petCond = null;


if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
    nameCond =false;
}


if (age > 20 && age < 30) {
    ageCond = true;
}else {
    ageCond = false;
}

if (hieght >= 170) {
    hieghtCond = true;
}else {
    heigthCond = false;
}

if (petName[petName.length-1] === "y") {
    petCond =true;
}else {
    petName =false;
}


if (nameCond && ageCond && heigthCond && petCond) {
    console.log("WELCOME SPY!");
}else {
    console.log("Nothing to see here");
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

 
   

  const colors = ['red', 'blue', 'purple', 'green', 'orange'];
let index = 0;

function changeHeaderColor() {
  const header = document.querySelector('h1');
  header.style.color = colors[index];
  index = (index + 1) % colors.length; // loop back when it reaches the end
}
  
  setInterval(changeHeaderColor, 500);