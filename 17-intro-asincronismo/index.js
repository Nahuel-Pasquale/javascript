// const hola = () => {
//   console.log('Hola');
// };

// const nucba = () => {
//   console.log('Nucba')
// }

// const main = () => {
//   hola();
//   nucba();
// }

// main();

// callstack: main, nucba, hola, 
// let obj1 = obj2 = { valor: 1 };
// let obj3 = {...obj2}
// obj2.valor = 5;

// console.log(obj1.valor);

// console.log(obj1 === obj2);

console.log('buenas'); // 1 

setTimeout(() => {
  console.log('Nucba')  // 2
}, 2000);

console.log('Probando Event Loop'); // 3


// callstack: 3 , 2 , 1  ==> salida: 


const climaCordoba = 'valor de retorno de la API' // hacemos la peticion ==> demora 2s,

// () => { renderiza(climaCordoba) }