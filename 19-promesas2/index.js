//https://pokeapi.co/api/v2/{endpoint}/
//"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
// ?offset=20&limit=20 = queryParams
const div = document.getElementById("div");

const traerPokemones = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json()
    const arrayPromesas = data.results.map((poke) => 
      fetch(poke.url).then((res) => res.json())
    );
    // console.log(arrayPromesas)
    const results = await Promise.all(arrayPromesas)
    mapearPokemones(results);
    // console.log(results)
  } catch (err) {
    console.log(err)
  }
}

const mapearPokemones = (resultados) => {
  const html = resultados
    .map(
      (pokemon) => 
      `<p styles="display:flex; justify-content:center; align-items:center;">
         <img src="${pokemon.sprites.front_default}">
         <img src="${pokemon.sprites.back_default}">
         ${pokemon.name}
      </p>
      `
    ).join('')
  div.innerHTML = html;
}

// traerPokemones();

// tomar un valor de un input <input id="input" type="text"> y buscar el poke

const buscarPokemon = async () => {
  const input = document.getElementById('input');
  const pokemon = input.value.toLowerCase();
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();
    console.log(data)
    const html = 
    `<p styles="display:flex; justify-content:center; align-items:center;">
      <img src="${data.sprites.front_shiny}">
      <img src="${data.sprites.back_default}">
      ${data.name}
      <!-- ${data.name} --!>
    </p>`
    div.innerHTML += html;
  } catch (error) {
    console.log(error)
  }
}

const deleteAll = () => {
  div.innerHTML = '';
}
// agregar el evento al boton
const btn = document.getElementById('btn');
const btnDelete = document.getElementById('btn-delete');
btn.addEventListener('click', buscarPokemon)
btnDelete.addEventListener('click', deleteAll)



