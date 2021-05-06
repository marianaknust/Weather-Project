let now = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDay = days[now.getDay()];
let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
let minutes = now. getMinutes();
 if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let today = now.getUTCDate ();
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Set","Oct","Nov","Dec"];
let currentMonth = months[now.getMonth()];


let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${currentDay}, ${today} ${currentMonth} ${hours}:${minutes}`;

let apiKey = "05f78a209463d416f8843b75229cbdc0";

function searchCity (event) {
  event.preventDefault();
  
  let chosenCity = document.querySelector(".insert-city").value;
  
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(displayTemperature);
}

function searchCurrent (position) {
  
  
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

   axios.get(apiURL).then(displayTemperature);
   
}

function getCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrent);
}

let searchButton = document.querySelector("button#search");
searchButton.addEventListener("click", searchCity);

let currentButton = document.querySelector("button#current");
currentButton.addEventListener("click", getCurrent);

function displayTemperature (response){
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector(".daily-temperature");
  currentTemp.innerHTML = `${temperature}°C`;
  
  let city = document.querySelector(".city");
  city.innerHTML = response.data.name;
}
