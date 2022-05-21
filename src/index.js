function displayTemperature(response) {
  let temperatureEl = document.querySelector("#degrees");
  let cityEl = document.querySelector(".city");
  let descriptionEl = document.querySelector("#description");
  let humidityEl = document.querySelector("#humidity");
  let windEl = document.querySelector("#wind");
  let dateEl = document.querySelector(".day");
  let timeEl = document.querySelector(".time");

  temperatureEl.innerHTML = Math.round(response.data.main.temp) + "°";
  cityEl.innerHTML = response.data.name;
  descriptionEl.innerHTML = response.data.weather[0].description;
  humidityEl.innerHTML = response.data.main.humidity;
  windEl.innerHTML = Math.round(response.data.wind.speed);
  dateEl.innerHTML = formatDate(response.data.dt * 1000);
  timeEl.innerHTML = formatTime(response.data.dt * 1000);
}

let apiKey = "3f40d3adb734ab9c238d75c205df7d42";
let city = "Berlin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}`;
}

function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function search(city) {
  let apiKey = "3f40d3adb734ab9c238d75c205df7d42";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input-user");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");
