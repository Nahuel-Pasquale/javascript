// asignar todas las variables o crearlas

const logo = document.getElementById('logo');
const title = document.getElementById('title'); 
const div = document.getElementById('div'); 
const input = document.getElementById('input'); 
const p = document.querySelector('p');

// Definir nuestras funciones

// const handleChange = () => {
//     alert('me cambiaste');
// }

p.className += 'color-azul';
// console.log(p.className);
// console.log(p.classList.value);
// p.classList = ['color-azul', 'hidden']
const handleClick = () => {
    // p.className += ' hidden';
    // if(p.classList.contains('hidden')){ // con contains utilizo un array de clases
    if(p.className.includes('hidden')){ //con includes utilizo una cadena de texto
        p.classList.remove('hidden');
    } else {
        p.classList.add('hidden');
    }
}

const handleClickTernario = () => p.classList.contains('hidden') ? p.classList.remove('hidden') : p.classList.add('hidden'); //Ternario


logo.addEventListener('click', handleClick)



// hacer la magia
// console.log(div);
// logo.addEventListener('click', handleClick);
// input.addEventListener('change', handleChange);
// input.setAttribute('placeholder', 'escribi tu nombre');
// p.setAttribute('id', 'parrafo');
// p.style.color = 'blue';
// div.className += "nueva-clase";
// p.className += 'color-azul';

// localStorage

// clear = borra todo el storage
// setItem() = agrega un item al storage
// getItem() = trae un item del storage
// removeItem() = elimina un item del storage

localStorage.setItem('Nombre', 'nahuel');
// localStorage.getItem();

const objJS = {
    nombre: 'nahuel',
    apellido: 'pasquale',
    edad: 29
}

const objString = {
    "nombre": 'nahuel',
    "apellido": 'pasquale',
    "edad": 29
}

const jsonString = JSON.stringify(obj);

console.log(JSON.stringify(obj)); // lo guardamos en el storage, o db

console.log(JSON.parse(jsonString)); // lo usamos en el codigo

console.log(localStorage);



