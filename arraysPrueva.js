console.log("hola")

let arr = Array("hola", 1,2, "%", "6",);

console.log(arr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array de  números

console.log(`En esa lista de arrays tenemos la lista  ${numbers} que contiene un total de ${numbers.length} elementos`)

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split("em");
console.log(words);


const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0][0]; 
let fruitEnd = fruits.length -2;

console.log(firstFruit);

console.log(fruits[fruitEnd][0]);

const numberss = [1, 2, 3, 4, 5, 20, 400];
numberss[0] = 10; 
numberss[1] = 20; 
let numbersEnd = numberss.length -1;



numbers.length
console.log(numberss[numbersEnd]); 

const arrr = Array(); // crea un array vacío
console.log(arrr);

const eightEmptyValues = Array(8); // crea ocho valores vacíos
console.log(eightEmptyValues); // [empty x 8]


let numb1 = [1,2,3]

let numb2 = [4,5,6]

let concat = numb1.concat(numb2);

console.log(concat);

const list = ["hola", "que", "tal"];

console.log(list.indexOf("hola")); 
console.log(list.indexOf("que")); 
console.log(list.indexOf("tal")); 


const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names)

console.log(names.join()); 
console.log(names.join("")); 
console.log(names.join(" ")); 
console.log(names.join(", ")); 
console.log(names.join(" # ")); 
console.log(names.join(" / "));





const color = ["red", "blue", "yellow", "pink"];

console.log(color.slice(-3)); 
console.log(color.slice(0,1)); 

const n = [1, 2, 3, 4, 5, 6];
n.splice();
console.log(n);

const l = [1, 2, 3, 4, 5];
l.splice(0,2, 8,9);
console.log(l); // -> elimina todos los elementos