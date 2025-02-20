//date and time:
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;
//search city:
function searchCity(event){
  event.preventDefault();
  let cityInput=document.querySelector("#city-input");
  let city=document.querySelector("h1");
  city.innerHTML=`${cityInput.value}`;
  searchWeather(cityInput.value);
}
function showWeather(response){
  console.log(response.data);
  let temperature=document.querySelector(".current-temperature");
  temperature.innerHTML=`${response.data.temperature.current} °C`;
}
function searchWeather(city){
let apiKey="88bf2d049e3o03c506t04489abf0bb1a";
let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(url).then(showWeather);
}
let form=document.querySelector("#search-form");
form.addEventListener("submit",searchCity);