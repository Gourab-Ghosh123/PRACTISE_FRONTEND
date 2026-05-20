const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temp");

const wind = document.getElementById("wind");


searchBtn.addEventListener("click" , async () => {
    
    const city = cityInput.value;

    if(city === ""){
        alert("Enter city name")
        return;
    }
    try {
        // 1. we try to get the LATITUDE and LONGITUDE of the city...

        const geourl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

        const geoResponse = await fetch(geourl);
        const geoData = await geoResponse.json();
        console.log(geoData);

        // LATITUDE and LONGITUDE of the city not found...

        if(!geogata.results) {
            alert("city not found");
            return;
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;
        const place = geoData.results[0].name;

        //2. Get Weather Data....
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

        const weatherResponse = await fetch(weatherUrl);

        const weatherData = await weatherResponse.json();

        cityName.textContent = place;

        temperature.textContent = `Temperature : ${weatherData.current.temperature_2m} °C`;

        wind.textContent = `Wind Speed : ${weatherData.current.wind_speed_10m} km/h`;

    }

    catch(error){
        console.log(error);
        alert("soemthing went Wrong !");
    }

});

