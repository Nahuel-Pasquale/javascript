// Variables para la pagina
const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const caja = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

const options = { // creamos un objeto para guardar los datos de la siguiente pagina
  next: null, // guardamos la siguiente pagina
  isFetching: false // guardamos el estado de la carga
};

const renderPokemon = (pokemon) => { // creamos la función para renderizar los pokemones
  const { id, name, sprites, height, weight, types } = pokemon;

  return ` 
    <div class="poke"> 
        <img  src="${sprites.other.home.front_default}"/>
        <h2>${name.toUpperCase()}</h2>
        <span class="exp">EXP: ${pokemon.base_experience}</span>
        <div class="tipo-poke">
            ${types
              .map((tipo) => {
                return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
              })
              .join("")}
        </div>
        <p class="id-poke">#${id}</p>
        <p class="height">Height: ${height / 10}m</p>
        <p class="weight">Weight: ${weight / 10}Kg</p>
    </div>
  `;
};


const renderPokemonList = (pokeList) => { // creamos la función para renderizar la lista de pokemones
  const cards = pokeList // mapeamos la lista de pokemones
    .map((pokemon) => { 
      return renderPokemon(pokemon); // renderizamos cada pokemon
    })
    .join(""); // unimos los elementos del array en un string
  caja.innerHTML += cards; // renderizamos los pokemones en el html
};

/*Creamos la función para traernos la data del pokemon.*/
const fetchPokemons = async () => { // creamos la función para traer la data de los pokemones
  const res = await fetch(`${baseURL}?limit=8&offset=0`); // llamamos a la api
  const data = await res.json(); // obtenemos la data

  return data; // retornamos la data
};



const loadAndPrint = (pokemonsList) => { // creamos la función para renderizar los pokemones
  loader.classList.add("show"); // mostramos el loader
  setTimeout(() => { // creamos un timeout para que se vea el loader
    loader.classList.remove("show"); // ocultamos el loader
    renderPokemonList(pokemonsList); // renderizamos los pokemones
    options.isFetching = false; // cambiamos el estado de isFetching a false
  }, 1500); // tiempo del timeout
};


function init() { // creamos la función para inicializar la app
 
  window.addEventListener("DOMContentLoaded", async () => { // creamos un evento para que se ejecute cuando la página se cargue
    let { next, results } = await fetchPokemons(); // obtenemos la data de la api
    options.next = next; // guardamos la siguiente pagina

    const URLS = results.map((pokemon) => pokemon.url); // obtenemos las urls de los pokemones

    const mapeoURL = URLS.map(async (url) => { // mapeamos las urls
      const nextPokemons = await fetch(url); // obtenemos la data de cada pokemon
      return await nextPokemons.json(); // retornamos la data de cada pokemon
    })  
    const InfoPokemones = await Promise.all(mapeoURL); // obtenemos la data de cada pokemon
    renderPokemonList(InfoPokemones); // renderizamos los pokemones
  });

 
  window.addEventListener("scroll", async (e) => { // evento scroll
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement; // obtenemos los datos del scroll
    const bottom = scrollTop + clientHeight >= scrollHeight - 1; // obtenemos el final del scroll
    // console.log(scrollTop, clientHeight, scrollHeight) // verificamos que los datos esten bien

    if (bottom && !options.isFetching) { // si el scroll esta en el final y no esta cargando
      options.isFetching = true; // cambiamos el estado de isFetching a true
      console.log("llamando"); // verificamos que se llamo
      const nextPokemons = await fetch(options.next); // llamamos a la siguiente pagina
      const { next, results } = await nextPokemons.json(); // obtenemos los datos de la siguiente pagina
      options.next = next; // guardamos la siguiente pagina en options
 
      const URLS = results.map((pokemon) => pokemon.url); // obtenemos las urls de los pokemones de la siguiente pagina
      const mapeoURL = URLS.map(async (url) => { // mapeamos las urls para obtener la data de los pokemones
        const nextPokemons = await fetch(url); // llamamos a la url
        return await nextPokemons.json(); // obtenemos la data
      })
      const infoPokemones = await Promise.all(mapeoURL); // obtenemos la data de los pokemones

      loadAndPrint(infoPokemones);
    }
  });
}

/*Llamamos la función init */
init();
