//  https://api.coinlore.net/api/tickers/


const requestCoins = async (value) => {
  const baseUrl = 'https://api.coinlore.net/api/tickers/'
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    console.log('json ==>', json)
    const data = json.data;

    const results = value
      ? divideArray(data.filter((coin) => 
      coin.name.toLowerCase().includes(value.toLowerCase())
    ),10)
      : divideArray(data, 10);

    // console.log('data ==>', data)
    console.log('results', results)
    return {
      results: results,
      total: results.length,
      current: 0,
      prev: null,
      next: 1,
    };
  } catch (error) {
    console.log(error)
  }
}

function divideArray(arr, size) {
  let chunk = []; // declaramos un array vacio que va a contener los array que genere
  for(let i = 0; i < arr.length; i += size) { // recorremos el array
    chunk.push(arr.slice(i, i + size)) 
  }
  // console.log('chunk', chunk);
  return chunk;
}

requestCoins();

