// definis tus variables

// definis tus funciones

let a = 1; // number
let b = 2; 
let c = '1'; // string = texto
let d = true;
let e = false;

a == b; // e


let mes = prompt('ingresa un mes');

// if ( mes == 'Julio' ) {
//     alert('EEEEH Estoy en Julio');
// }


switch(mes){ // primer paso, por argumento le pasamos un dato
    case 'Enero': // definimos los casos posibles
        alert('Soy Enero'); // Ejecuto todas las instrucciones que queramos
        break; // Si es la opcion correcta, corta aca.
    case 'Febrero':
        alert('Soy Febrero');
        break;
    case 'Marzo':
        alert('Soy Marzo');
        break;
    case 'Abril':
        alert('Soy Abril');
        break;
    case 'Mayo':
        alert('Soy Mayo');
        break;
    case 'Junio':
        alert('Soy Junio');
        break;
    case 'Julio':
        alert('Soy Julio');
        break;
    case 'Agosto':
        alert('Soy Agosto');
        break; 
    default:  
        prompt('Elegi un mes valido');
        break
}



















