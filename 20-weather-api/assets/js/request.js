const key = '8e99183ac22ab0aeb4e9bb4e89a4da31';

const requestCity = async (city) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();
  // console.log(data);
  return data;
}

// requestCity('cordoba');
