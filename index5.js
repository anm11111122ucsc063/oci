document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY";  // Replace with your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        // Display weather data
        document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherDescription").innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
