/* eslint-disable react/prop-types */
import React from 'react';

import WeatherIcons from './WeatherIcons';
import FewClouds from './FewClouds';
import ScatteredClouds from './ScatteredClouds';
import BrokenClouds from './BrokenClouds';
import ShowerRain from './ShowerRain';
import Rain from './Rain';
import Thunderstorm from './Thunderstorm';
import Snow from './Snow';
import Mist from './Mist';

class WeatherNow extends React.Component {
  render() {
    const { data } = this.props;
    const { main } = data;
    const { temp } = main;
    const feelsLike = main.feels_like;
    const { description } = data.weather[0];
    const { icon } = data.weather[0];

    return (
      <div className="weatherNow">
        <div className="nowIcon">
          <WeatherIcons icon={icon} />
        </div>
        <div className="nowDescription">
          <h3>{temp}&#176;C</h3>
          <p>Feel Like: {feelsLike}&#176;C</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default WeatherNow;
