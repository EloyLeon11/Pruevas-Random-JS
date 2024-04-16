console.log("Hello Wolrd")

let num = 3;

if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
    console.log(`${num} es un numero negativo`)
}
//  3 es un número positi

let numm = 10;

if (numm !== 11){
    console.log(`${numm} hola `)
}

let raining = false

if(raining){
    console.log("Coje paraguas")
}else{
    console.log("No lo cojas")
}

let weather = "ahora si"

if(weather === "sunny"){
    console.log("perfect")
} else if (weather === "raining"){
    console.log("take parachusen")
} else if (weather === "cloudy" ){
    console.log("take ")
} else {
    console.log("Bien entendido")
}

switch (weather ){
   case "rainining":
    console.log("perfect");
   break;
   case "suny":
    console.log("perfecttttt");
    break;
   default:
    console.log("Lo has entendido 2")
}

console.log("TERNARIOS")

let ternarios = false;

ternarios ? console.log("primero el let y luego la pregunta ? que es como el IF")
: console.log(" luego va el ELSE que es representado como :")

