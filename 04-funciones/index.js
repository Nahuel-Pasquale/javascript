let hola = function(){
    console.log('hola soy una funcion anonima')
}

// hola();

// () => {
//     console.log('hola soy una funcion anonima')
// }


// Funciones Recursivas

// factorial de un numero n.

// 5 = 1*2*3*4*5

// for(estado inicial, expresion, actualizacion)

// function factorialBucle(n){
//     let res = 1;
//     for(let i = n ; i > 0 ; i--){
//         res = res * i;
//     }
//     return res;
// }

// function factorial(n){
//     if(n < 1) return 1;
//     console.log('primer log', n);
//     let resultado = n * factorial(n-1);
//     console.log('segundo log', n)
//     return resultado
// }

// const resultado = factorial(5);
// console.log(resultado)

// function sumar(a, b){
//     if(!isNaN(a) && !isNaN(b)){
//         return a + b; 
//     }
// }

function cuentaAtras(numero){
    // caso base
    if(numero === 0) return
    console.log(numero)
    return cuentaAtras(numero -1);
}

// cuentaAtras( () => {
//     return 4;
// });

// function saludar(nombre){
//     console.log(`Hola ${nombre}`)
// }

// function procesarEntradaUsuario(callback){
//     let nombre = prompt("por favor ingresa tu nombre");
//     callback(nombre);
// }

// procesarEntradaUsuario(saludar);

// function crearDicho(dicho, callback){
//     let miDicho = `nunca son suficientes: ${dicho}`
//     callback(miDicho);
// }

// function logDicho(dicho){
//     console.log(dicho)
// }

// crearDicho('horas para estudiar JS', logDicho);

// function decirHolaAlUsuario(usuario){
//     return "Hola " + usuario + "!!!"
// }
// function decirAdiosAlUsuario(usuario){
//     return "Adios " + usuario + "!!!"
// }
// function crearSaludo(usuario,callback){
//     return callback(usuario);
// }

// console.log(crearSaludo('Felipe', decirAdiosAlUsuario));

// const a = 'hola ';
// function global(){
//     const b = 'Como '
//     function local(){
//         const c = 'va?'
//         return a + b + c
//     }
//     return local
// }
// console.log(global()())



const combo =(function(){
    const tipoDeHamburguesa = ['carne', 'pollo', 'pescado', 'vegana'];
    const tipoDePan = ['integral', 'blanco', 'frances', 'arabe', 'masaMadre']
    const aderezos = ['cheddar', 'bacon', 'bbq', 'salsa', 'jamon', 'parmesano']
    const acompa??amientos = ['papas fritas', 'nuggets', 'ensalada']
    const bebidas = ['gaseosa', 'agua', 'cerveza', 'vino']

    function elegirTipoDeHamburguesa(){
        return tipoDeHamburguesa
    }
    function elegirTipoDePan(){
        return tipoDePan
    }
    function elegirAderezos(){
        return aderezos
    }
    function elegirAcompa??amientos(){
        return acompa??amientos
    }
    function elegirBebidas(){
        return bebidas
    }
    return {
        elegirTipoDeHamburguesa,
        elegirTipoDePan,
        elegirAderezos,
        elegirAcompa??amientos,
        elegirBebidas
    }
})();

console.log(combo.elegirTipoDeHamburguesa());

const lista = (arr) => {
    for( let i = 0 ; arr.length > i ; i++){
        console.log(arr[i]);
    }
}

lista(combo.elegirTipoDeHamburguesa())











