

const tbody = document.querySelector('tbody');
const prevBTN = document.querySelector('.left');
const nextBTN = document.querySelector('.right');
const pageNumber = document.querySelector('.page-number');
const form = document.querySelector(".form");
const searchInput = document.querySelector('.input-search');
const top100 = document.querySelector('.top-btn');
const btnContainer = document.querySelector('.pagination');

const renderCoin = (coin) => {
  console.log('coin ==>', coin);
  const {rank,
    market_cap_usd, 
    name, 
    symbol, 
    price_usd, 
    volume24, 
    percent_change_24h, 
    percent_change_7d
  } = coin;

  // console.log('symbol ==>', symbol);
  return `
  <tr>
    <td>#${rank}</td>
    <td class="coin-title">
      ${name} (${symbol.toUpperCase()})
    </td>
    <td>$${price_usd}</td>
    <td>$${market_cap_usd}</td>
    <td>$${volume24}</td>
    <td><span class="${percent_change_24h < 0 ? 'down' : 'up'}">${percent_change_24h}</span></td>
    <td><span class="${percent_change_7d < 0 ? 'down' : 'up'}">${percent_change_7d} </span></td>
  </tr> 
  `
};

const renderCoins = async (coins, current) => {
  if(!coins.length) {
    tbody.innerHTML = `<h1> No se encontraron resultados, realice una nueva busqueda </h1>`
    top100.classList.remove('hidden');
    btnContainer.classList.add('hidden');
    form.reset();
    return;
  }

  btnContainer.classList.remove('hidden');
  console.log('coin ==>', coins[current]);
  tbody.innerHTML = coins[current].map(renderCoin).join('')
};

const disablePreviousBTN = (prev) => {
  if (prev === null) {
    prevBTN.classList.add('disabled')
  } else {
    prevBTN.classList.remove('disabled')
  }
};
const disableNextBTN = (next, total) => {
  if (next === total) {
    nextBTN.classList.add('disabled')
  } else {
    nextBTN.classList.remove('disabled')
  }
};

// {
//   results: results, [[],[],[]]
//   total: results.length,
//   current: 0,
//   prev: null,
//   next: 1,
// };

const setCoins = (coins) => {
  prev = coins.prev;
  current = coins.current
  next = coins.next
  total = coins.total
  results = coins.results
}

const loadCoins = async (e) => {
  e.preventDefault();

  const searchedValue = searchInput.value.trim();

  let coins = await requestCoins(searchedValue);
  setCoins(coins);


  if(searchedValue) {
    top100.classList.remove('hidden');
    form.reset()
  } else {
    top100.classList.add('hidden');
  }

  pageNumber.innerHTML = current + 1;
  renderCoins(results, current);
  disableNextBTN(next, total);
  disablePreviousBTN(prev);

  nextBTN.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    if (next === total) return;
    prev = current;
    current += 1;
    next += 1;
    renderCoins(results, current);
    pageNumber.innerHTML = current + 1;
    disableNextBTN(next, total);
    disablePreviousBTN(prev);
  });

  prevBTN.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    if (prev === null) return;

    current -= 1;
    renderCoins(results, current);
    prev = prev === 0 ? null : current - 1;
    next -= 1;
    pageNumber.innerHTML = current + 1;
    disableNextBTN(next, total);
    disablePreviousBTN(prev)
  });
};

const showTop100 = () => {
  loadCoins();
};


const init = () => {
  window.addEventListener('DOMContentLoaded', loadCoins);
  form.addEventListener('submit', loadCoins);
  top100.addEventListener('click', loadCoins);
};

init();