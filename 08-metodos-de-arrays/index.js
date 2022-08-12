// METODOS DE STRINGS

// string.repeat(n)
const nombre = 'Nahu 29 años de edad';
const apellido = 'Pasquale'
const edad = 29
// console.log(nombre.repeat(3))

// string.charAt(n)
// console.log(nombre.charAt(0))

// string.concat(string)
// console.log(nombre.concat(apellido))

// string.includes(value)
// console.log(nombre.includes('N' || '10'))

// string.slice(start, end)
// console.log(nombre.slice(0,100))

// RETORNA UN ARRAY A PARTIR DE UN STRING
// console.log(nombre.split(" "))

// array.map(function(item, index, array){})

// const nuevoArr = arr.map( (e) => {
//     console.log(e);
//     return e * 2;
// } )
// console.log(nuevoArr)
// const nuevoObj = arrayObjetos.map( (objeto) => {
//     return {
//         ...objeto,
//         nombre: objeto.nombre.toUpperCase(),
//     }
// } )
// console.log(nuevoObj)

// array.filter(function(item, index, array){})
// const nuevoArr = arr.filter((e) => e > 10);
// const nuevoArr = arrayObjetos.filter((e) => {
//     return e.nombre == 'Adrian' || e.nombre == 'Nahu';
// });
// console.log(nuevoArr);

// arra.reduce(function(acumulador, item, index, array){})
// const nuevoArr = arr.reduce((acumulador, e) => {
//     return acumulador + e;
// })
// console.log(nuevoArr);


// array.find(function(item, index, array){})
// const nuevoArr = arr.find( (e) => e > 2 );
// const nuevoArr = arrayObjetos.find((e) => {
//     return e.id == 4;
// });
// console.log(nuevoArr);

// array.some(function(item, index, array){})
// const nuevoArr = arr.some( (e) => {
//     return e > 150;
// } )
// const nuevoArr = arrayObjetos.some( (e) => {
//     return e.id == 2;
// } )
// console.log(nuevoArr);

// array.every(function(item, index, array){})
// const nuevoArr = arr.every( (e) => {
//     return e > 1;
// } )
// const nuevoArr = arrayObjetos.every( (e) => {
//     return e.nombre.length >= 4;
// } )
// console.log(nuevoArr);

// array.forEach(function(item, index, array){})
// const nuevoArr = arr.forEach( (e) => {
//     const otroArray = []
//     otroArray.push(e * e);
//     return otroArray;
// } )
// console.log(nuevoArr);


const arr = [10,2,3,4,55,16];
const arrayObjetos = [
    {id: 1, nombre:'Nahu'},
    {id: 2, nombre:'Bruno'},
    {id: 3, nombre:'Adrian'}
];
// array.sort(function(a, b){})
const nuevoArr = arr.sort((a,b) => a-b)
console.log(nuevoArr);



