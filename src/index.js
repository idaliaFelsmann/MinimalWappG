function displayTemperature(response) {
  console.log(response.data);
  let temperatureEl = document.querySelector("#degrees");
  let cityEl = document.querySelector(".city");
  let descriptionEl = document.querySelector("#description");
  let humidityEl = document.querySelector("#humidity");
  let windEl = document.querySelector("#wind");

  temperatureEl.innerHTML = Math.round(response.data.main.temp);
  cityEl.innerHTML = response.data.name;
  descriptionEl.innerHTML = response.data.weather[0].description;
  humidityEl.innerHTML = response.data.main.humidity;
  windEl.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3f40d3adb734ab9c238d75c205df7d42";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
