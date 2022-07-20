
// let = ['number = 1',
// 'string',
// 'boolean = true',
// null,
// 'array = []',
// undefined,
// 'object'
// ]

// let numero = 1;
// let string = 'nombre'
// let boolean = true;
// let arr = [1,2,1];
// let obj = {}
// let undef = undefined;
// let nul = null;

// console.log(typeof nul);

// const colores = []

// class Pizza {
//     constructor(tamaño, tipoDeMasa, sabor, precio, aceitunas = true){  
//         this.tamaño = tamaño;
//         this.tipoDeMasa = tipoDeMasa;
//         this.sabor = sabor;
//         this.precio = precio;
//         this.aceitunas = aceitunas;
//     }
// }


// let miPizza = new Pizza(2, 'integral', 'queso de castaña con rucula','1600',true);
// let miPizza2 = new Pizza('grande', 'masa madre', 'rucula','600');

// console.log(miPizza2)

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

// let miAuto = new Auto('peugeot',208,2020);

// console.log(miAuto.getMarca('Mercedes'))

// console.log(miAuto)

class Robot {
    constructor(color, posX, posY){
        this.color = color;
        this.posX = posX;
        this.posY = posY;
    }

    // metodo para desplazar al robot
    desplazar = function(x, y){
        this.posX = x;
        this.posY = y;
    };

    // imprimir la posicion de mi robot
    getPosicion = function(){
        console.log(`Estoy en la posicion ${this.posX} en X y ${this.posY} en Y`)
    }
}

let robot = new Robot('óxido', 0, 0);

console.log(robot.getPosicion());

robot.desplazar(15,53);

console.log(robot.getPosicion());





