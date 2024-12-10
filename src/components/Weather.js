// Weather.js
const fetchWeatherData = async (city, apiKey) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return {
        location: {
          name: data.name,
          country: data.sys.country,
        },
        current: {
          temp_c: data.main.temp,
          condition: {
            text: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          },
          humidity: data.main.humidity,
          wind_kph: data.wind.speed,
        },
      };
    } catch (error) {
      throw new Error(error.message || 'Error fetching weather data.');
    }
  };
  
  export default fetchWeatherData;
  