//Show date
function formatDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};

let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let day = days[now.getDay()];
  let showDay = document.querySelector("#dateDay");
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let showTime = document.querySelector("#dateTime");
  let showMonth = document.querySelector("#dateMonth");
  let showDate = document.querySelector("#dateDate");
  let showYear = document.querySelector("#dateYear");

  showDay.innerHTML = `${day}`;
  showMonth.innerHTML = `${month}`;
  showDate.innerHTML = `${date}`;
  showYear.innerHTML = `${year}`;


let dateElement = document.querySelector("#dateTime");
dateElement.innerHTML = formatDate(now);

//Clear button
//    function clearFunction() {
//        document.querySelector("#search-city").reset();
//    }

//Weather in current location

  function showWeather(response) {
    document.querySelector("#city-name").innerHTML = response.data.name;
    document.querySelector("#temp-unit").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
  }

  function searchCity(city) {
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(`${apiUrl}`).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#textInput").value;
    searchCity(city);
  }

  function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(`${apiUrl}`).then(showWeather);
  }  

  function showCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  let searchForm = document.querySelector("#search-city");
  searchForm.addEventListener("submit", handleSubmit);

  let currentLocation = document.querySelector("#current-button");
  currentLocation.addEventListener("click", showCurrent);

 //Change unite
 function showCel(event) {
    event.preventDefault();
    temp.innerHTML = `19`;
 }
 function showFah(event) {
    event.preventDefault();
    temp.innerHTML = `66`;
 }

 let unitCel = document.querySelector("#unit-cel");
 let unitFah = document.querySelector("#unit-fah");
 let temp = document.querySelector("#temp-unit");
 unitCel.addEventListener("click", showCel);
 unitFah.addEventListener("click", showFah);
