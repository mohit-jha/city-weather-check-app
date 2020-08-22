const weatherApi = {
    key: "c9ca93530112a7956ae24aa78a1aa7f5",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
    // baseUrl:'api.openweathermap.org/data/2.5/weather'
}
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {

        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = 'block'
    }
});


function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}


function showWeatherReport(weather) {
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minmaxtemperature = document.getElementById('min-max');
    minmaxtemperature.innerHTML = `${Math.floor(weather.main.temp_min -1)}&deg;C / (min) ${Math.ceil(weather.main.temp_max +1)}&deg;C /(max)`

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todaydate = new Date();
    date.innerText = dateManage(todaydate);



    if (weatherType.textContent == 'Rains') {
        document.body.style.backgroundImage = "url('person-in-black-hoodie-riding-swing-while-raining-804474.jpg')"

    }
    else if (weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('thundergif.gif')"
        document.getElementById("imgani").src = "thunderani.gif";
    }

    else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze.jpg')"
        document.getElementById("imgani").src = "sunani.gif";

    }

    else if (weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('sunnyWeather.jpg')"
        document.getElementById("imgani").src = "sunani.gif";

    }
    else if (weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('mist.jpg')"
        document.getElementById("imgani").src = "sunani.gif";

    }
    else if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')"
        document.getElementById("imgani").src = "clearani.gif";

    }
    
    else if (weatherType.textContent == 'MostClouds') {
        document.body.style.backgroundImage = "url('mostclouds.jpg')"
        document.getElementById("imgani").src = "mostcloudgif.gif";

    }

    else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('clouds.jpg')"
        document.getElementById("imgani").src = "cloudy-weather.gif";

    }
    else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('raining.jpg')"
        document.getElementById("imgani").src = "rainani.gif";

    }

    else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')"
        document.getElementById("imgani").src = "snowani.gif";

    }
    else if (weatherType.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('smoke.jpg')"
        document.getElementById("imgani").src = "fog-weather.gif";

    }
    else {
        document.body.style.backgroundImage = "url('else.jpg')"
        document.getElementById("imgani").src = "clearani.gif";

    }
    

}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "Octuber", "November", "December"];

    let year = dateArg.getFullYear();

    let month = months[dateArg.getMonth()];

    let date = dateArg.getDate();

    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}

