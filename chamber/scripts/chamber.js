
async function fetchMembers() {
    try {
        const response = await fetch('data/chamber.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('member-container');
    if (!container) return; 
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <img src="${member.image}" alt="${member.name}" />
        `;
        container.appendChild(card);
    });
}


async function fetchWeather() {
    const apiKey = '91d9546015e83abf75f4b882d2e71a34'; 
    const city = 'Los Angeles'; 

    try {

        const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` );
        if (!response.ok) throw new Error('Network response was not ok');
        const weatherData = await response.json();

 
        if (!weatherData.main) {
            console.error("Weather data is not available.");
            return;
        }

        console.log(weatherData); 

     
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');
        
        if (temperatureElement) temperatureElement.textContent = weatherData.main.temp + '°C';
        if (descriptionElement) descriptionElement.textContent = weatherData.weather[0].description;
        if (humidityElement) humidityElement.textContent = weatherData.main.humidity + '%';

      
        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;

        const forecastResponse = await fetch(` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric` );
        if (!forecastResponse.ok) throw new Error('Network response was not ok');

        const forecastData = await forecastResponse.json();
        console.log("3-Day Forecast Data:", forecastData); 

        const forecastTemp1 = document.getElementById('forecast-temp1');
        const forecastDesc1 = document.getElementById('forecast-desc1');
        const forecastTemp2 = document.getElementById('forecast-temp2');
        const forecastDesc2 = document.getElementById('forecast-desc2');
        const forecastTemp3 = document.getElementById('forecast-temp3');
        const forecastDesc3 = document.getElementById('forecast-desc3');

        if (forecastTemp1 && forecastDesc1) {
            forecastTemp1.textContent = forecastData.daily[1].temp.day.toFixed(1); // Day 1
            forecastDesc1.textContent = forecastData.daily[1].weather[0].description;
        }
        if (forecastTemp2 && forecastDesc2) {
            forecastTemp2.textContent = forecastData.daily[2].temp.day.toFixed(1); // Day 2
            forecastDesc2.textContent = forecastData.daily[2].weather[0].description;
        }
        if (forecastTemp3 && forecastDesc3) {
            forecastTemp3.textContent = forecastData.daily[3].temp.day.toFixed(1); // Day 3
            forecastDesc3.textContent = forecastData.daily[3].weather[0].description;
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

fetchMembers();
fetchWeather(); 
updateFooter();

document.getElementById('grid-view').addEventListener('click', () => {
    const memberContainer = document.getElementById('member-container');
    if (memberContainer) {
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
    }
});

document.getElementById('list-view').addEventListener('click', () => {
    const memberContainer = document.getElementById('member-container');
    if (memberContainer) {
        memberContainer.classList.remove('grid-view');
        memberContainer.classList.add('list-view');
    }
});

function updateFooter() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('last-modified');
    const currentYearElement = document.getElementById('current-year');

    if (lastModifiedElement) lastModifiedElement.textContent = lastModified.toLocaleDateString();
    if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.toggle('active'); 
            hamburger.classList.toggle('is-active'); 
        }
    });
}