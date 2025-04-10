const apiKey = "ac2824af5e6bd6061c79bb7fd2c63185";
const lat = 20.51;
const lon = -86.95;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const current = data.list[0];
    const tomorrow = data.list.find(item => item.dt_txt.includes("15:00:00"));

    const celsiusToFahrenheit = (celsius) => Math.round((celsius * 9/5) + 32);

    document.getElementById("weather-main").textContent = current.weather[0].main;
    document.getElementById("weather-desc").textContent = current.weather[0].description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;

    // Display both Celsius and Fahrenheit with no decimals
    document.getElementById("temp").textContent = 
      `${Math.round(current.main.temp)}°C / ${celsiusToFahrenheit(current.main.temp)}°F`;
    document.getElementById("humidity").textContent = current.main.humidity;
    document.getElementById("forecast").textContent = 
      `${Math.round(tomorrow.main.temp)}°C / ${celsiusToFahrenheit(tomorrow.main.temp)}°F`;
    document.getElementById("temp-banner").textContent = 
      `Today’s High: ${Math.round(current.main.temp_max)}°C / ${celsiusToFahrenheit(current.main.temp_max)}°F`;
  });
