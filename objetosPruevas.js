
const rectangle = {
    length: 20,
    width: 20,
    propiedad : "valor",
    propiedad2: "clave"

};

console.log(rectangle);

const user = {
    firstName: "Eloy" ,
    lastName: "Leon",
    age: "29",
    country: "Gerona",
    city: "Calonge",
    skills: [
        "Camino ha ser programador de exito",
        "Professor de tennis y padel",
        "Buen cocinero",
        "Deportista",
        "Sabe escuchar",
        "Sabe entender a las personas",
        "Videojugador promedio alto",
        "Sabe hacer el delicioso ( Una buena tortilla de patatas)",
        "Fiel porque le asustan las mujeres y con una tiene suficiente"
    ],

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    phoneNumber: "+34 679787090",

    isMarried: null,
};

console.log(user)

console.log(user.skills)
console.log(user.age)
console.log(user.phoneNumber)

// tambien con corchetes

console.log(user["firstName"])
console.log(user["lastName"])
console.log(user["country"])

// como valor podemos hacer funciones y para llamar funciones como la de getFullName se hace así

console.log(user.getFullName());


// Añadir propiedades y valores a tu objeto


// const copyPerson = Object.assign({}, user);
// console.log(copyPerson);

const copyUser = Object.assign({}, user);

console.log(copyUser);

const keysUser = Object.keys(copyUser);

console.log(keysUser)