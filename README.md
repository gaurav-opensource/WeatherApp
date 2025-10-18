# Weather App 🌤️

A simple **Weather App** built with **HTML, CSS, and JavaScript** that fetches real-time weather data for any city using the **OpenWeatherMap API**.

---

## Features

* Enter a city name and get current weather information.
* Displays:

  * City name
  * Date & time
  * Temperature (°C)
  * Weather description
  * Weather icon
  * Wind speed
  * Humidity
  * Pressure
  * Custom message based on weather (e.g., "Clear sky, enjoy the day!")
* Handles invalid city names gracefully.

---

## Technologies Used

* **HTML5** – Structure of the app
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Fetching weather data and dynamic content
* **OpenWeatherMap API** – Real-time weather data

---

## How it Works

1. User enters a city name in the input field.
2. User clicks the **"Get Weather"** button.
3. JavaScript function `getWeather()` is triggered:

   * Fetches weather data from **OpenWeatherMap API** using `fetch()` and `await`.
   * Handles errors using `try...catch`.
   * Displays weather info dynamically in the HTML.
4. If the city is invalid, an error message is shown in red.

---

## Usage

1. Clone the repository:

```bash
git clone https://github.com/gaurav-opensource/WeatherApp.git
```

2. Open `index.html` in your browser.
3. Replace `"YOUR_API_KEY"` in `script.js` with your OpenWeatherMap API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

4. Enter a city name and click **Get Weather**.

---

## API Reference

* **OpenWeatherMap Current Weather API**
  [https://openweathermap.org/current](https://openweathermap.org/current)

---

## Future Enhancements

* Add **search history**.
* Add **Enter key support** to fetch weather without clicking the button.
* Change background dynamically based on weather.
* Support multiple units (Celsius, Fahrenheit, Kelvin).

---

## Author

**Your Name** – [GitHub](https://github.com/gaurav-opensource/WeatherApp)




