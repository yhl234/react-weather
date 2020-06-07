/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import WeatherIcons from './WeatherIcons';

class WeatherNow extends React.Component {
  render() {
    const { data } = this.props;
    const dateTime = data.dt_txt;
    const { main } = data;
    const { temp } = main;
    const feelsLike = main.feels_like;
    const { description } = data.weather[0];
    const { icon } = data.weather[0];
    console.log(data);

    return (
      <div className="weatherNow">
        <div className="nowIcon">
          <WeatherIcons icon={icon} />
        </div>
        <div className="nowDescription">
          <p className="dateTime">{dateTime}</p>
          <h3>{temp}&#176;C</h3>
          <p>Feel Like: {feelsLike}&#176;C</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default WeatherNow;
