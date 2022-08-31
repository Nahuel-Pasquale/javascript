

// class Auto {
//     constructor(marca,modelo,año){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     arrancar = function(){
//         return 'el auto arrancó'
//     };
//     getMarca = function(nuevaMarca){
//         return this.marca = nuevaMarca
//     }
// }

// class Robot {
//     constructor(color, posX, posY){
//         this.color = color;
//         this.posX = posX;  
//         this.posY = posY;
//     }

//     desplazar = function(x, y){
//         this.posX = x;
//         this.posY = y;
//     };

//     getPosicion = function(){
//         console.log(`Estoy en la posicion ${this.posX} en X y ${this.posY} en Y`)
//     }
// }


class Milanesa {
    constructor(tamaño, sabor, precio, tipo){  
        this.tamaño = tamaño;
        this.sabor = sabor;
        this.precio = precio;
        this.tipo = tipo;
    }
}

// console.log(mila)
// sum += arg
// sum = sum + arg

const arr = [1,2,-3,4,5,6,7,8,-9,10];
const arr2 = [5,8,16,-15];

function sumarAll(a ,...args){
    const sum = a;
    
    for(let arg of args) sum += arg
    
    return sum;
}

// console.log(sumarAll(1, 2, 4 ,...arr ,5));

const arr3 = [...arr, ...arr2]

// console.log(arr3)

// console.log(  Math.min(...arr3)  );


const mila = new Milanesa('grande', 'espinada', '500', 'soja');

const toppings = {
    papasFritas: true,
    queso: true,
    jamon: true,
}
const toppingsArr = ['papasFritas','queso','jamon']
// console.log(mila)

// let milaCompleta = { 
//     ...mila,
//     ...toppings,
// }
const milaCompleta = { 
    ...mila,
    toppings: toppingsArr,
}



let persona = {
    nombreTit: 'nahuel',
    lugarDeResidencia: {
        pais: 'Argentina',
        localidad: 'Avellaneda'
    },
    trabajo: 'profesos de JS',
    alumnos: ['Sebastian', 'Elias', 'Leo', 'El mejor Maxi']
};

let { nombreTit: nombre, lugarDeResidencia } = persona


console.log(country)

// let nombre = persona.nombre;
// let nacionalidad = persona.nacionalidad;
// let trabajo = persona.trabajo;

// let { nombreTit: nombre, ...resto } = persona;

// console.log(nombre, resto);

















