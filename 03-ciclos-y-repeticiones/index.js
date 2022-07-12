

let miListaDeSuper = ['pan', 'leche','chocolate','cerveza'];

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

console.log(!isNaN(5));
console.log(!isNaN('nahuel'));

function sumar(a, b){
    if(isNaN(a) == false && isNaN(b) == false){
        return a + b; 
    }
}

let resultado = sumar('5', 5);

console.log(resultado);







