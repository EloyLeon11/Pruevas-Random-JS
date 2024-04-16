// función sin parámetros. La función eleva al cuadrado un número

function square(){
    let num = 2
    let sq = num * num;
    console.log(sq, "Activo funcion")
}

square();

function sum(){
    let sum1 = 1
    let sum2 = 2
    sum = sum1 + sum2;
    console.log(sum);
}

sum();

console.log("Aqui usamos el RETURN como si imprimiesemos con console.log, asi podremos retornar el valo con el nombre de la funcion")

function rest(){
    let rest1 = 12;
    let rest2 = 1;

    let restt = rest1 - rest2;

    return restt
}

console.log(rest())


console.log("Aqui usaremos parametros, los parametros se indican dentro de la llamada de la funcion, y es el valor que queramos hacer dentro del retorno")

function summ(sum1, sum2){
    let summ1= sum1;
    let summ2 = sum2;

    let totalSum = sum1 + sum2;

    return totalSum;
}

console.log(summ(2,2))

console.log("hacemos una funcion para sumar arrays")

function sumValor(arr){

    let sumArr = 10;

    for(let i = 0; i < arr.length; i++){
        sumArr = sumArr + arr[i];
    }
    return sumArr;
}
const numbers = [2, 2, 2, 2, 2]

console.log(sumValor(numbers))

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numberrs = [1, 2, 3, 5];
      //llamada a la función
  console.log(sumArrayValues(numberrs));

  console.log("Haremos una funcion, para que el usuario pueda poner el array a su gusto")

// Ejemplo 

function allSums(){
    let suma5 = 0;

    for ( let i = 0;  i < arguments.length; i++) {

        suma5 += arguments[i];

    }

    return suma5
}

console.log(allSums(5,5))


// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//     }
//     return sum
//   }
  
//   console.log(sumAllNums(1, 2, 3, 4)) // 10
//   console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
//   console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

console.log("Funcion flecha, no coge la palabra arugment, se hace con 3 puntos ")

const restArrow = (...numbers) => {

    let rest = 100;

    for ( const element of numbers){

        rest -= element
    }

    return  rest


}

console.log(restArrow(5,5))

// Función anónima
// Función anónima o sin nombre

const anonymousFun = function () {
  console.log("Soy una función anónima y mi valor se almacena en anonymousFun");

  let one = 1

  let two = 2

  let suumms = one + two;

  return console.log(suumms);
};

anonymousFun()


const quadro = (n) =>{

    return n*n;

}

console.log(quadro(2,2))


// Función de autoinvocación
// Las funciones de autoinvocación son funciones anónimas que no necesitan ser llamadas para devolver un valor.

// (function (n) {
//   console.log(n * n);
// })(2); // 4, pero en lugar de solo imprimir si queremos regresar y almacenar los datos, hacemos lo que se muestra a continuación

// let squaredNum = (function (n) {
//   return n * n;
// })(10);

// console.log(squaredNum);

function greetings(name = "Peter") {
    let message = `${name}, welcome to 30 Days Of JavaScript!`;
    return message;
  }
  
  console.log(greetings());
  console.log(greetings("Asabeneh"));


