// windchill.js

const temp = parseFloat(document.getElementById("temp").getAttribute("data-temp"));
const windSpeed = parseFloat(document.getElementById("wind-speed").getAttribute("data-wind-speed"));

const windChillElement = document.getElementById("wind-chill");

if (temp <= 50 && windSpeed > 3.0) {

    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    
    windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)}°F`;
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}
