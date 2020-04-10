import React from 'react';
import Location from './Location';
import WeatherMore from './WeatherMore';
import WeatherNow from './WeatherNow';

const data = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1585461600,
      main: {
        temp: 10,
        feels_like: 7.96,
        temp_min: 10,
        temp_max: 10.74,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 80,
        temp_kf: -0.74,
      },
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.83, deg: 164 },
      rain: { '3h': 0.14 },
      sys: { pod: 'n' },
      dt_txt: '2020-03-29 06:00:00',
    },
    {
      dt: 1585472400,
      main: {
        temp: 10.02,
        feels_like: 7.29,
        temp_min: 10.02,
        temp_max: 10.57,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 81,
        temp_kf: -0.55,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 70 },
      wind: { speed: 2.88, deg: 148 },
      sys: { pod: 'n' },
      dt_txt: '2020-03-29 09:00:00',
    },
    {
      dt: 1585483200,
      main: {
        temp: 10.14,
        feels_like: 6.81,
        temp_min: 10.14,
        temp_max: 10.51,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 84,
        temp_kf: -0.37,
      },
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
      ],
      clouds: { all: 84 },
      wind: { speed: 3.95, deg: 158 },
      rain: { '3h': 1.96 },
      sys: { pod: 'n' },
      dt_txt: '2020-03-29 12:00:00',
    },
    {
      dt: 1585494000,
      main: {
        temp: 10.44,
        feels_like: 7.78,
        temp_min: 10.44,
        temp_max: 10.62,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 87,
        temp_kf: -0.18,
      },
      weather: [
        { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.27, deg: 155 },
      rain: { '3h': 4.13 },
      sys: { pod: 'd' },
      dt_txt: '2020-03-29 15:00:00',
    },
  ],
  city: {
    id: 5391959,
    name: 'San Francisco',
    coord: { lat: 37.7749, lon: -122.4194 },
    country: 'US',
    population: 805235,
    timezone: -25200,
    sunrise: 1585403997,
    sunset: 1585448932,
  },
};

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <Location />
        <WeatherNow data={data.list[0]} />
        <WeatherMore />
      </div>
    );
  }
}
export default Weather;
