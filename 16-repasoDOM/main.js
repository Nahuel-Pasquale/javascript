const barsBtn = document.querySelector('.menu-label');
const barsMenu = document.querySelector('.navbar-list');
const barsIcon = document.querySelector('.menu-icon');
barsBtn.addEventListener('click', () => barsMenu.classList.toggle('open-menu'))
barsIcon.addEventListener('click', () => barsIcon.classList.toggle('rotate-icon'))


let peliculas = [
  {
    id: 1,
    titulo: 'El señor de los anillos: La comunidad del anillo',
    descripcion:
      'Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
    director: 'Peter Jackson',
    anio: 2001,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX720_.jpg',
  },
  {
    id: 2,
    titulo: 'Volver al futuro',
    descripcion:
      'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.',
    director: 'Robert Zemeckis',
    anio: 1985,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BYjQxMTIyMWUtMmMyMS00MGNmLTkzNzktOTM2YzMyZmRjYTYzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
  {
    id: 3,
    titulo: 'Harry Potter y la piedra filosofal',
    descripcion:
      'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
    director: 'Chris Columbus',
    anio: 2001,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
  {
    id: 4,
    titulo: 'Spiderman',
    descripcion:
      'Al ser mordido por una araña modificada genéticamente, un chico de instituto tímido y estudioso adquiere habilidades de araña que al final tendrá que usar para luchar contra el mal como un superhéroe tras una tragedia familiar.',
    director: 'Sam Raimin',
    anio: 2002,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX511_.jpg',
  },
  {
    id: 5,
    titulo: 'Fight Club',
    descripcion:
      'Un oficinista insomne y un desentendido fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.',
    director: 'David Fincher',
    anio: 1999,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BNzJhZjg3MWQtNDk1Zi00ZjMzLWI1ZjUtNmE2MDg0ZDU4MzZlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
  },
  {
    id: 6,
    titulo: 'El Origen',
    descripcion:
      'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
    director: 'Christopher "EL REY" Nolan',
    anio: 2010,
    imagen:
      'https://m.media-amazon.com/images/M/MV5BMTUzMzUyOTktNmYyNS00YTA1LWIxNmQtMGIzZDYxZGI3OTliXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
  },
];


const cards = document.getElementById('cards');

const renderCard = pelicula => {
  const {titulo, descripcion, director, anio, imagen} = pelicula
  return `
    <div class="card">
    <img src="${imagen}" alt="${titulo}" class="card-img">
    <div class="card-body">
      <h3> ${titulo} </h3>  
      <p> ${descripcion} </p>
      <p> ${director} </p>
      <p> ${anio} </p>
    </div>
    </div>
  `
}

const renderCards = peliculas => {
  cards.innerHTML = peliculas.map(renderCard).join('');
}

window.addEventListener('DOMContentloaded', renderCards(peliculas));