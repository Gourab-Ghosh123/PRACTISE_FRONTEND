import { useState } from "react";


function App() {

  const [city , setcity] = useState("");

  const [weather , setWeather] = useState("");

  const [loading , setLoading] = useState(false);

  const [error , setError] = useState("");

  async function fetchWeather() {
    try {
      setLoading(true)

      setError("");

      const response = await fetch(`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY}&query=${city}`);

      if(!response.ok){
        throw new Error("City Not Found");
      }

      const data = await response.json();

      setWeather(data);
    }

    catch(err) {
      setError(err.message);
    }

    finally {
      setLoading(false)
    }
  }

    return (
    <div>
      <h1>Weather App</h1>

      <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setcity(e.target.value)}/>

      <button onClick={fetchWeather}>Search</button>

      {
        loading && <h2>Loading...</h2>
      }
      {
        error && <h2>{error}</h2>
      }

      {
        weather && (
          <div>
            <h2>{weather.location.name}</h2>
            
            <h3>{weather.current.temperature}°C</h3>

            <p>{weather.current.weather_descriptions[0]}</p>

            <p>Humidity : {weather.current.humidity}</p>
          </div>
        )
      }

    </div>
  );
}
export default App;