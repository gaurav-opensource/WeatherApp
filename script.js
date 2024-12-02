async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey =  "952c2e1ce759b09d84aa12b1a53bda4d"; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const data = await response.json();
      const weatherDataDiv = document.getElementById("weatherData");
  
      // Format the data
      const weatherHtml = `
        <h2>Weather in ${data.name}</h2>
        <p>${new Date().toLocaleString()}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>🌤️ ${data.weather[0].main === "Clear" ? "Clear sky, enjoy the day!" : "Partly cloudy, a comfortable day."}</p>
      `;
  
      weatherDataDiv.innerHTML = weatherHtml;
    } catch (error) {
      document.getElementById("weatherData").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  