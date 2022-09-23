const form = document.getElementById('form');
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const waitMsg = document.querySelector('.wait');

// traemos los elementos del localStorage si hay, sino []
let cities = JSON.parse(localStorage.getItem("cities")) || [];
// seteamos los elementos en localStorage
const saveLocalStorage = (citiesList) => {
  localStorage.setItem("cities", JSON.stringify(citiesList))
};

// convertimos los grados kelvin a celsius
const convertCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

// funcion para renderizar una ciudad
const renderCity = (city) => {
  // console.log(city)
  console.log(city.weather)
  const imageName = city.weather[0].icon;
  console.log(imageName)
  return `
          <div class="card-clima animate">
          <i class="fa-solid fa-x close" data-id='${city.id}'></i>
          <div class="clima-info">
                    <h2 class="info-title">${city.name}, ${city.sys.country}</h2>
                    <p class="info-subtitle">${city.weather[0].description}</p>
                    <div class="info-temp">
                      <span class="temp">${convertCelsius(city.main.temp)}°</span>
                      <span class="st">${convertCelsius(city.main.feels_like)}° ST</span>
                    </div>
                  </div>
                  <div class="clima-img">
                  <img src="./assets/img/${imageName}.png" alt=""/>
                  </div>
                  <div class="clima-temp">
                    <div class="clima-max-min">
                      <span class="clima-max"
                        ><i class="fa-solid fa-arrow-up-long"></i>Max: ${convertCelsius(city.main.temp_max)}</span
                      >
                      <span class="clima-min"
                        ><i class="fa-solid fa-arrow-down-long"></i>Min: ${convertCelsius(city.main.temp_min)}</span>
               </div>
             <span class="clima-humedad">${city.main.humidity}% Humedad</span>
            </div>
          </div>
  `
}

// funcion que toma un array de ciudades y las mapea para renderizar cada una de ellas
const renderCitiesList = (citiesList) => {
  cardContainer.innerHTML = citiesList.map((city) => renderCity(city)).join('')
};

const searchCity = async (e) => {
  e.preventDefault();
  const searchedCity = cityInput.value.trim();
  if (searchedCity === '') return alert('Por favor ingrese una ciudad');

  // traigo el elemento de la api
  const fetchedCity = await requestCity(searchedCity);
  // console.log(fetchedCity)
  // valido que el elemento no sea undefined, ni este en la lista
  if(!fetchedCity.id) {
    form.reset();
    return alert("La ciudad ingresada no existe")
  } else if (cities.some((city) => city.id === fetchedCity.id)) {
    form.reset();
    return alert("ya estamos mostrando el clima de esa ciudad")
  }
  // si paso la validacion, lo agrego a mi lista de ciudades
  cities = [fetchedCity, ...cities];
  renderCitiesList(cities);
  saveLocalStorage(cities);
  hideWaitMsg(cities);
  form.reset()
}

const removeCity = (e) => {
  if(!e.target.classList.contains("close")) return;
  const filterId = Number(e.target.dataset.id);
  if(window.confirm("¿Está seguro que desea eliminar esta card de clima?")) {
    cities = cities.filter((city) => city.id !== filterId)
    renderCitiesList(cities);
    saveLocalStorage(cities);
    hideWaitMsg(cities);
  }
}

const hideWaitMsg = (citiesList) => {
  if(citiesList.length !== 0) {
    waitMsg.classList.add("hidden");
    return;
  }
  waitMsg.classList.remove("hidden");
}


const init = () => {
  renderCitiesList(cities);
  hideWaitMsg(cities);
  form.addEventListener("submit", searchCity);
  cardContainer.addEventListener("click", removeCity);
}

init();
