// Select HTML elements for current weather and forecast
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastSection = document.querySelector('#forecast'); // This is the section for the 3-day forecast

// OpenWeatherMap API URL for current weather
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=43.195194&lon=-112.354530&units=imperial&appid=ac2824af5e6bd6061c79bb7fd2c63185`;

// OpenWeatherMap API URL for 5-day forecast (next 3 days)
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.195194&lon=-112.354530&units=imperial&cnt=9&appid=ac2824af5e6bd6061c79bb7fd2c63185`;

// Fetch current weather and forecast data
async function fetchWeatherData() {
    try {
        // Fetch current weather data
        const currentResponse = await fetch(currentWeatherUrl);
        if (!currentResponse.ok) throw new Error("Failed to fetch current weather");

        const currentData = await currentResponse.json();
        displayCurrentWeather(currentData);

        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");

        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Display current weather (first item in the weather data)
function displayCurrentWeather(data) {
    const currentData = data;
    currentTemp.innerHTML = `${currentData.main.temp}&deg;F`;  // Display current temperature
    const iconSrc = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;  // Get icon for current weather
    const desc = currentData.weather[0].description;  // Get description for current weather

    // Set icon and description for current weather
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Display the 3-day forecast (next 3 days' weather)
function displayForecast(data) {
    let forecastHTML = '<h3>3-Day Forecast</h3><ul>'; // Create a header for the forecast section

    // Loop through the forecast data, using every 8th entry to get the forecast for 12:00 PM each day
    for (let i = 1; i <= 3; i++) {
        const day = data.list[i * 8];  // Get the data point for 12:00 PM each day (every 8th entry)
        const temp = day.main.temp;  // Temperature for the forecasted day
        const icon = day.weather[0].icon;  // Weather icon
        const dayDesc = day.weather[0].description;  // Weather description
        const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;  // Icon URL

        // Add forecast details to the HTML
        forecastHTML += `
            <li>
                <p><strong>Day ${i}:</strong> ${temp}&deg;F</p>
                <img src="${iconUrl}" alt="${dayDesc}">
                <p>${dayDesc}</p>
            </li>`;
    }

    forecastHTML += '</ul>';  // Close the forecast list
    forecastSection.innerHTML = forecastHTML;  // Display the 3-day forecast below the current weather
}

// Call the API function to fetch weather data
fetchWeatherData();
