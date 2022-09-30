
// const obj2 = {
//   ...obj,
//   age: '20',
//   name: 'mati',
//   clavosEnLaTobillo: 7
// }

// const obj3 = {
//   ...obj2,
//   name: 'gago'
// }

// console.log('obj1 ==> ', obj)
// console.log('obj2 ==> ', obj2)
// const { name: nombre, ...all } = obj3
// console.log('obj3 ==> ', nombre)

const arr = [1,2,3,4,5];
const arr2 = [...arr,6,7,8,9];
// console.log('ARR2 ==>' , arr2)

// const sumarAll = (a, ...args) => {
//   let suma = a
//   for(let arg of args) suma += arg
//   console.log(suma)
//   return suma;
// }
// sumarAll(1,...arr2)

// suma += arg
// suma = suma + arg


// const soyUnObjetoLiteral = {
//   name: 'nahu',
//   age: '29',
//   country: 'ar'
// }


// if (obj.name === 'nahu'){
//   console.log('SOY NAHU')
// } else {
//   console.log('NO SOY NAHU')
// };

// obj.name === 'nahu' 
//   ? console.log('SOY NAHU') 
//   : obj.age === 29 
//   ? console.log('tengo 29') 
//   : console.log('llegue al final, y nada es correcto');

const baseUrlPoke = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

const reqPokemons = async () => {
  const response = await fetch(baseUrlPoke);
  // console.log('jsonPok', response);
  const data = await response.json();
  console.log('dataPok', data);
  return data.results;
}

// reqPokemons()
const reqPokemon = async () => {
  const pokemons = await reqPokemons();
  const pokemonData = await pokemons.map( async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  });
  const pokemondataReolved = await Promise.all(pokemonData);
  console.log(pokemondataReolved)
  return pokemondataReolved;
}

// reqPokemon();


const baseUrlCrypto =  'https://api.coinlore.net/api/tickers/'

const reqCoins = async () => {
  try {
    const response = await fetch(baseUrlCrypto);
    const data = await response.json();
    console.log('dataCrypto', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const baseUrlGot = 'https://thronesapi.com/api/v2/Characters'

const reqGot = async () => {
  try {
    const response = await fetch(baseUrlGot)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const genericFetch = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}
console.log(genericFetch(baseUrlPoke))
genericFetch(baseUrlPoke)
genericFetch(baseUrlCrypto)
genericFetch(baseUrlGot)