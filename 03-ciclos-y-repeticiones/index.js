


// console.log(miListaDeSuper);
// console.log(miListaDeSuper.length);
// console.log('primer item de mi lista',miListaDeSuper[0]);
// console.log('ultimo item de mi lista',miListaDeSuper[miListaDeSuper.length - 1]);

//declaracion de una funcion
function hacerUna_(comida, bebida){
    // serie de instrucciones o lo que quiero que haga o hacer una torta
    console.log(`vamos a hacer una ${comida} y tomar una ${bebida}`);
    // console.log('vamos a hacer una ' + comida);
}


// ejecucion de una funcion
// hacerUna_('pastafrola', 'coca');
// hacerUna_('torta', 'te');
// hacerUna_(miListaDeSuper[miListaDeSuper.length - 1], 'cerveza');

// isNaN = is not a number

// console.log(!isNaN(5));
// console.log(!isNaN('nahuel'));

function sumar(a, b){
    if(!isNaN(a) && !isNaN(b)){
        return a + b; 
    }
}

// Arrow functions

const sumarArrow = (a, b) => {
    if(!isNaN(a) && !isNaN(b)){
        return a + b; 
    }
}

let resultado = sumarArrow(5, 5);

// console.log(resultado);


// Ciclo for

let miListaDeSuper = ['pan', 'leche','chocolate','cerveza'];

// pan
// leche
// chocolate
// cerveza

// for( let i = 0 ; miListaDeSuper.length > i ; i++){
//     console.log(miListaDeSuper[i]);
// }

// for(let numero = 1 ; numero <= 10 ; numero++){
//     console.log(`El numero actual es ${numero}`);
//     if(numero === 6){
//         break;
//     }
// }


// break


// for(let numero = 0 ; numero <= 10 ; numero++){
//     if(numero % 2 !== 0){
//         continue;
//     }
//     console.log(`El numero actual es ${numero}`);
// }

// continue


let numero = 0;
let i = 0;

while(numero < 10) {
    console.log(`El numero WHILE es ${numero}`)
    numero++
}


do {
    console.log(`El numero DOWHILE es ${i}`);
    i++;
} while (i < 10)










