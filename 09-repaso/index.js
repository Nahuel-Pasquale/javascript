

// 1) ¿Cómo puedo asignar elementos de una lista (array) a los parametros de una variable que genera un objeto a través de una class?
// 2) ¿Puedo crear una variable con varios array dentro? Si es así cómo accedo a ellos para cumplir con la pregunta anterior?

// class Pizza {
    //     constructor (id, nombre, ingredientes, precio){
        //         this.id = id;
        //         this.nombre = nombre;
        //         this.ingredientes = ingredientes;
        //         this.precio = precio;
        //     }
        // }
        
// const arr = [
//     ['vegetareana', 'peperoni', 'anana', 'ANANA'],
//     ['1', 'peperoni', '5', 'lo que vos quieras'],
//     ['2', 'peperoni', 'anana', 'ANANA'],
// ]
// console.log(arr[1][3]);



// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const pizzas = [
    {
        id: 1,
        nombre: "Pizza Margarita",
        ingredientes: ["Queso", "Tomate", "Peperoni"],
        precio: 10
    },
    {
        id: 2,
        nombre: "Pizza Napolitana",
        ingredientes: ["Queso", "Tomate", "Peperoni", "Pollo"],
        precio: 12
    },
    {
        id: 3,
        nombre: "Pizza Vegetariana",
        ingredientes: ["Queso", "Tomate", "Peperoni", "Pollo", "Pimiento"],
        precio: 14
    },
    {
        id: 4,
        nombre: "Pizza de Jamón",
        ingredientes: ["Queso", "Tomate", "Peperoni", "Jamón"],
        precio: 16
    },
    {
        id: 5,
        nombre: "Pizza de Peperoni",
        ingredientes: ["Queso", "Tomate", "Peperoni"],
        precio: 18
    },
    {
        id: 6,
        nombre: "Pizza de Anana",
        ingredientes: ["Queso", "Tomate", "Peperoni", "Anana"],
        precio: 20
    }
];

// a) Las pizzas que tengan un id impar.

// const a = pizzas.filter((e) =>  {
//     return e.id % 2 != 0
// });
// function chequear(pizza) {
// pizza.id % 2 === 0 ? null : console.log(pizza);
// }

// pizzas.forEach( (e) => {
    // if(e.id % 2 !== 0) {
    //     console.log(`la pizza ${pizza.nombre} tiene un id impar`);
    // }
    // e.id % 2 !== 0 ? console.log(`la pizza ${e.nombre} tiene un id impar`)
    // : null;
// });

// const pizzasImpar = pizzas.reduce( (acumulador, pizza) => {
//     pizza.id % 2 !== 0 ? acumulador.push(pizza) : null;
//     return acumulador
// }, []);
// console.log(pizzasImpar)

// b) ¿Hay alguna pizza que valga menos de $13?

// const pizzaConValorMenosA13 = pizzas.some( function(e){
//     return e.precio <= 13
// });
// console.log(pizzaConValorMenosA13 ? 'hay pizzas menores a 13' : 'no hay pizzas con ese valor')

// c) El nombre de cada pizza con su respectivo precio.

// const nombrePizzaPrecio = pizzas.map ( (pizza) => {
//     return {
//         nombre: pizza.nombre,
//         precio: pizza.precio
//     }
// })
// console.log(nombrePizzaPrecio);

// pizzas.forEach( (e) => console.log(`La ${e.nombre} tiene un valor de ${e.precio}`))

// d) Todos los ingredientes de cada pizza

const ingredientesDePizzas = pizzas.map ( (pizza) => {
    return {
        nombre: pizza.nombre,
        ingrediente: pizza.ingredientes}
} )

// console.log(ingredientesDePizzas);

// pizzas.forEach ((pizza) => {
//     console.log ('las pizza ' + pizza.nombre + ' :')
//     //otro recorrido
//     logearTodosLosIngredientesDeLaPizza();
// })
// pizza.ingredientes.forEach( (ingrediente) => {
//     console.log( `- ${ingrediente}` )
// })

a();
b();
c();
d();

function a(parametros){
    // la resolucion del ejercicio

}

const a = (parametros) => {
    // resolucion del ejercicio
}













