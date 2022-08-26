/* eslint-disable no-unused-vars */
import getCurrentWeatherData from './modules/get-current-weather-data.js';
import moment from 'moment';
import css from './styles/style.css';
/* eslint-disable no-unused-vars */

// Added to prevent API call on app refresh
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', async () => {
  //
  // Get weather Data
  const weatherData = await getCurrentWeatherData();
  const weatherDataList = weatherData.data;
  console.log(weatherDataList);
});
