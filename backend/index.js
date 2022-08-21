import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import getWeatherData from './get-weather-data.js';

const port = 3000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const weatherData = await getWeatherData();
    res.send(weatherData);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
