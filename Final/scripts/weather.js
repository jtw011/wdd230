const apiKey = "YOUR_API_KEY";
const lat = 20.51;
const lon = -86.95;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const current = data.list[0];
    const tomorrow = data.list.find(item => item.dt_txt.includes("15:00:00"));
    document.getElementById("weather-main").textContent = current.weather[0].main;
    document.getElementById("weather-desc").textContent = current.weather[0].description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    document.getElementById("temp").textContent = current.main.temp.toFixed(1);
    document.getElementById("humidity").textContent = current.main.humidity;
    document.getElementById("forecast").textContent = tomorrow.main.temp.toFixed(1);
    document.getElementById("temp-banner").textContent = `Today’s High: ${current.main.temp_max.toFixed(1)}°C – Scoot around in the sun!`;
  });
