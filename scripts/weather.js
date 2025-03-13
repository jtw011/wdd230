const apiKey = "5b13fd7606ef8ee83d3c19d932d818b8"; 
const city = "Rexburg";
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data not available");

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Update HTML content
        document.getElementById("temperature").textContent = temperature;
        document.getElementById("description").textContent = description;
        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherIcon.style.display = "inline"; 

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

// Run the function when the page loads
fetchWeather();
