for ( i = 0; i <= 5; i++ ){
    console.log(i);
}

for ( i = 0; i <= 5; i++ ){
    console.log(`${i} * & ${i} = ${i * i}`);
}


const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];

for ( i = 0; i < countries.length; i++){

    
    if( countries[i] === "Denmark")
     newArr.push("Hola");
    else{
        newArr.push(countries[i].toUpperCase());
    }


  
}

console.log(newArr)


// POCO DE DUDAS

let string = ["Creo", "Que", "si"]


let seis = "Ahora";


for ( i = 0; i < string.length; i++){
  
    seis = seis + " " + string[i];
}

console.log(seis);

let numb = ["1", "2", "3", "4", "5"]

let a = []

let b = 0;

// ----------------------------

for( i= 0; i < numb.length; i++){
    a.push(numb[i] ** 2)
}

console.log(a)

// DUDA

// let i = 0;

//  let s = 0;

// while (i < 5 ) {
   
//     i++;

//     s += i;

//     console.log(s)

// }


n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x)
}


// --------------------------------------------



