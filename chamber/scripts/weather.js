const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const city = "YOUR_CITY"; // Replace with your city name

fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('weather');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        weatherContainer.innerHTML = <p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });