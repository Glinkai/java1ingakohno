'use strict';
//2
let ourPlanetName = "Земля";
let myBirthday = '04.05.1993';
let carIsBroken = 'Range Rover';
let colorHeader = 'Red';
let inspector = 'Admin';
console.log(ourPlanetName);
console.log(myBirthday);
console.log(carIsBroken);
console.log(colorHeader);
console.log(inspector);
//3
let hello = 'Привет,';
let myName = 'меня зовут Инга Кохно,';
let myAge = 'мне 29 лет';
console.log(hello, myName, myAge);
//4
let teacher = prompt("Как Ваше имя?", "Имя");
console.log(`Мою работу проверяет ${teacher}`);
//5
let str = "String";
console.log(typeof(str));
let nume = 2000;
console.log(typeof(nume));
let testSkiped = false;
console.log(typeof(testSkiped));
let month = undefined;
console.log(typeof(month));
let data = null;
console.log(typeof(null));
//6
let newStr = "37";
newStr = Number(newStr);
console.log(newStr, typeof(newStr));
newStr = Boolean(newStr);
console.log(newStr, typeof(newStr));

let newValue = true;
newValue = String(newValue);
console.log(newValue, typeof(newValue));
newValue = Number(newValue);
console.log(newValue, typeof(newValue));

let newNum = 2007;
newNum = String(newNum);
console.log(newNum, typeof(newNum));
newNum = Boolean(newNum);
console.log(newNum, typeof(newNum));
//7
let name = "Ivan";
let surname = name;
console.log(surname);