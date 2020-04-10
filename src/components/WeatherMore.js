/* eslint-disable react/prop-types */
import React from 'react';

import WeatherIcons from './WeatherIcons';

class WeatherMore extends React.Component {
  render() {
    const { data, showMore, toggleMore } = this.props;
    return (
      <div>
        <button type="button" onClick={toggleMore}>
          Show More
        </button>
        <div className={`weatherMore ${showMore ? 'showWeatherMore' : ''}`}>
          {data.map((d, i) => (
            <div className="weatherNow" key={i}>
              <div className="nowIcon">
                <WeatherIcons icon={d.weather[0].icon} />
              </div>
              <div className="nowDescription">
                <h3>{d.main.temp}&#176;C</h3>
                <p>Feel Like: {d.main.feels_like}&#176;C</p>
                <p>{d.weather[0].description}</p>
                <p>{d.dt_txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default WeatherMore;
