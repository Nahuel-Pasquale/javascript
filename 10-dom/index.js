const titulo = document.getElementById("titulo");
const titulos = document.getElementsByClassName("title");
// const titulos = document.getElementsByTagName("h1");

// console.log(titulos[0].innerText);

const textos = document.getElementsByTagName("p"); // devuelte HTMLCollection

// for( let i = 0 ; i < textos.length ; i++ ){
//     console.log(textos[i].innerText)
// }

// let arr = Array.from(textos); 
let arr = [...textos]; // Paso HTMLCollection to array.

// console.log(arr)
// arr.forEach(e => console.log(e));  e hace refencia al elemento (p = parrafo)


// QuerySelector
// const parrafo = document.querySelector("p")
// console.log(parrafo);
// const parrafos = document.querySelectorAll("p")
// parrafos.forEach(e => console.log(e.innerText));
// console.log(parrafos);


// const parrafoTest = document.getElementById("addText");
// parrafoTest.innerHTML = "<span> <b> Somos los mejores </b>  de la camada </span>"

const lista = document.getElementById("lista-dinamica");
// console.log(lista);

// Creamos el <li>
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

// Agregamos el texto a mis <li>
li.textContent = "Mi <li> dinámico";
li2.textContent = "Mi <li2> dinámico";
li3.textContent = "Mi <li3> dinámico";

// Incorporamos los Li al Ul
// lista.appendChild(li);
// lista.appendChild(li2);
// lista.appendChild(li3);
// console.log(lista)

const arrItems = ["facundo", "facundo", "facundo", "facundo","facundo"]
arrItems.forEach((e)=> {
    const li = document.createElement("li");
    li.textContent = e;
    // console.log(li.textContent);
    lista.appendChild(li);
});

// setTimeout
const saludos = (nombre, edad) => {
    console.log(`hola mi nombre es ${nombre}`);
    console.log(`tengo ${edad}`);
}
// setTimeout(saludos, 2000, 'Nahuel', 29);
// 1- callback, 2- timer(ms), 3- argumentos del callback
// setTimeout(() => {
//     console.log('Hola');
// }, 3000);

// setInterval
// const repetirCada2Segundos = () => {
//     timer = setInterval(mensaje, 1000);
// }
// const mensaje = () => {
//     console.log('pasaron 2 segundos');
// }
// let url = document.createElement('a');
// url.href = 'https://www.google.com';


// setInterval(() => {
//     console.log('pasaron 2 segundos');
// }, 2000);
// setTimeout( () => {
//     window.location = url;
// }, 5000) 



// Location
// console.log(window.location.href);

// console.log(url);
// console.log(url.protocol);
// console.log(url.host);
// console.log(url.hostname);



